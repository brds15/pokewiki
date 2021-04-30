import React from 'react';
import { Container, RightSide, ButtonIcon, LeftSide, Title } from './Styles';

const Header = () => {
  return (
    <Container>
      <LeftSide>
        <Title>PokeWiki</Title>
      </LeftSide>

      <RightSide>
        <ButtonIcon />
      </RightSide>
    </Container>
  );
};

export default Header;
