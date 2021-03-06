import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PageWrapper } from '../../styles/globals';
import { Section } from './Styles';
import { useTranslation } from 'react-i18next';
import '../../services/translations/i18n';
import { getGenerations, makeGetRequest } from '../../services/api/pokeapi';
import NavOption from '../../components/NavOption';
import NavTab from '../../components/NavTab';
import Category from '../../components/Category';
import Card from '../../components/Card/Card';
import { DetailContext } from '../../context/DetailProvider';

type SpecieId = string;
type Picture = JSX.Element;

interface SpeciesI {
  name: string;
  url: string;
  picture: Picture;
  id: SpecieId;
}

const defaultGenerationUrl = 'https://pokeapi.co/api/v2/generation/1/';

const Home = () => {
  const { t } = useTranslation();
  const [generationsList, setGenerationsList] = useState([]);
  const [generationIndexActive, setGenerationIndexActive] = useState(0);
  const [speciesList, setSpeciesList] = useState<SpeciesI[]>([
    { name: '', url: '', picture: <></>, id: '' }
  ]);
  const { changeAll } = useContext(DetailContext);

  const blankMessage = useMemo((): JSX.Element => {
    return (
      <li>
        <span>Nothing to Show</span>
      </li>
    );
  }, []);

  const handleGenerationIndexActive = (index: number) => {
    setGenerationIndexActive(index);
  };

  const handleLoadGeneration = useCallback((url: string) => {
    makeGetRequest(url).then(response => {
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
        setSpeciesList(newSpeciesList);
      }
    });
  }, []);

  useEffect(() => {
    if (generationsList.length === 0 && !speciesList[0].name) {
      getGenerations().then(response => {
        setGenerationsList(response.results);
        handleLoadGeneration(defaultGenerationUrl);
      });
    }
  }, [generationsList.length, handleLoadGeneration, speciesList]);

  const handleClickGeneration = (url: string, index: number) => {
    handleLoadGeneration(url);
    handleGenerationIndexActive(index);
  };

  const handleClickSpecie = (url: string) => {
    makeGetRequest(url).then(response => {
      const {
        color,
        name,
        capture_rate,
        id,
        is_lengendary,
        is_baby,
        base_happiness,
        habitat
      } = response;

      const detailObj = {
        color: color && color.name ? color.name : 'white',
        captureRate: capture_rate,
        id: id,
        isBaby: is_baby,
        isLegendary: is_lengendary,
        name: name,
        happiness: base_happiness,
        habitat: habitat && habitat.name ? habitat.name : ''
      };
      changeAll(detailObj);
    });
  };

  return (
    <PageWrapper>
      <NavTab>
        {generationsList.length > 0 ? (
          generationsList.map(({ name, url = defaultGenerationUrl }, index) => {
            const generationNumber = index + 1;
            return (
              <NavOption
                key={index}
                title={`${t('generation')} ${generationNumber}`}
                onClick={() => handleClickGeneration(url, index)}
                isActive={generationIndexActive === index}
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
              return (
                <Card
                  key={index}
                  title={name}
                  imageContainer={picture}
                  onClick={() => handleClickSpecie(url)}
                />
              );
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
