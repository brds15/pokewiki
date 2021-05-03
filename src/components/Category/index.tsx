import React from 'react';
import { Wrapper, TitleContainer, Title, ListContainer } from './Styles';

interface CategoryProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

const Category = (props: CategoryProps) => {
  const { title, children } = props;
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ListContainer>{children}</ListContainer>
    </Wrapper>
  );
};

export default Category;
