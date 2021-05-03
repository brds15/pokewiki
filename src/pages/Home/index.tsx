import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../services/translations/i18n';
import { getGeneration, getGenerations } from '../../services/api/pokeapi';
import NavOption from '../../components/NavOption';
import NavTab from '../../components/NavTab';
import Category from '../../components/Category';
import Card from '../../components/Card/Card';
import { PageWrapper } from '../../styles/globals';
import { Section } from './Styles';

const Home = () => {
  const { t } = useTranslation();
  const [currentGeneration, setCurrentGeneration] = useState('1');
  const [generationsList, setGenerationsList] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);

  const blankMessage = useMemo((): JSX.Element => {
    return (
      <li>
        <span>Nothing to Show</span>
      </li>
    );
  }, []);

  const handleLoadGeneration = useCallback((generationNumber: string) => {
    getGeneration(generationNumber).then(response => {
      console.log('generation response', response);
      setSpeciesList(response.pokemon_species);
    });
  }, []);

  useEffect(() => {
    getGenerations().then(response => {
      console.log('response', response);
      setGenerationsList(response.results);
      handleLoadGeneration(currentGeneration);
    });
  }, [handleLoadGeneration, currentGeneration]);

  return (
    <PageWrapper>
      <NavTab>
        {generationsList.length > 0 ? (
          generationsList.map(({ name }, index) => {
            return <NavOption key={index} title={name} />;
          })
        ) : (
          <>{blankMessage}</>
        )}
      </NavTab>
      <Section>
        <Category title={t('species')}>
          {speciesList.length > 0 ? (
            speciesList.map(({ name }, index) => {
              return <Card key={index} title={name} />;
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
