import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PageWrapper } from '../../styles/globals';
import { Section } from './Styles';
import { useTranslation } from 'react-i18next';
import '../../services/translations/i18n';
import { getGeneration, getGenerations } from '../../services/api/pokeapi';
import NavOption from '../../components/NavOption';
import NavTab from '../../components/NavTab';
import Category from '../../components/Category';
import Card from '../../components/Card/Card';
import { getPokeImage } from '../../services/api/pokeres';

type SpecieId = string;
type Picture = JSX.Element;

interface SpeciesI {
  name: string;
  url: string;
  picture: Picture;
  id: SpecieId;
}

const Home = () => {
  const { t } = useTranslation();
  const [generationsList, setGenerationsList] = useState([]);
  const [speciesList, setSpeciesList] = useState<SpeciesI[]>([
    { name: '', url: '', picture: <></>, id: '' }
  ]);
  const [pictureList, setPictureList] = useState([{}]);

  const blankMessage = useMemo((): JSX.Element => {
    return (
      <li>
        <span>Nothing to Show</span>
      </li>
    );
  }, []);

  const handlePictureList = useCallback((idList: string[]) => {
    const promises = idList.map(id => {
      return getPokeImage(id).then(response => ({
        picture: <img alt={'pokeimage'} src={JSON.stringify(response)} height={55} width={55} />,
        id: id
      }));
    });
    Promise.allSettled(promises).then(response => setPictureList(response));
  }, []);

  const handleLoadGeneration = useCallback(
    (generationNumber: string) => {
      getGeneration(generationNumber).then(response => {
        if (response && response.pokemon_species && response.pokemon_species.length > 0) {
          let idList: string[] = [];

          const newSpeciesList = response.pokemon_species.map((specie: SpeciesI) => {
            const urlArr = specie.url.split('/');
            const pokeId = urlArr[urlArr.length - 2];
            idList = [...idList, pokeId];

            return {
              ...specie,
              picture: (
                <img
                  width={60}
                  height={60}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                  alt={specie.name}
                />
              ),
              id: pokeId
            };
          });
          handlePictureList(idList);
          setSpeciesList(newSpeciesList);
        }
      });
    },
    [handlePictureList]
  );

  useEffect(() => {
    if (generationsList.length === 0 && !speciesList[0].name) {
      getGenerations().then(response => {
        setGenerationsList(response.results);
        handleLoadGeneration('1');
      });
    }
  }, [generationsList.length, handleLoadGeneration, speciesList]);

  useEffect(() => {}, [pictureList]);

  return (
    <PageWrapper>
      <NavTab>
        {generationsList.length > 0 ? (
          generationsList.map(({ name, url = '1/' }, index) => {
            const urlArr = url.split('/');
            const generationId = urlArr[urlArr.length - 2];
            return (
              <NavOption
                key={index}
                title={name}
                onClick={() => handleLoadGeneration(generationId)}
              />
            );
          })
        ) : (
          <>{blankMessage}</>
        )}
      </NavTab>
      <Section>
        <Category title={t('species')}>
          {speciesList.length > 0 ? (
            speciesList.map(({ name, url = '', picture, id }, index) => {
              return <Card key={index} title={name} imageContainer={picture} />;
            })
          ) : (
            <>{blankMessage}</>
          )}
        </Category>
      </Section>
    </PageWrapper>
  );
};

export default Home;
