import React from 'react';
import { Container, RightSide, ButtonLangIcon, LeftSide, Title, BrIcon, UsIcon } from './Styles';
import i18n from "i18next";

const Header = () => {
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container>
      <LeftSide>
        <Title>PokeWiki</Title>
      </LeftSide>

      <RightSide>
        <ButtonLangIcon>
          <BrIcon onClick={() => handleChangeLanguage('pt')} />
          <UsIcon onClick={() => handleChangeLanguage('en')} />
        </ButtonLangIcon>
      </RightSide>
    </Container>
  );
};

export default Header;
