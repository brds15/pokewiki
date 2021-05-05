import React from 'react';
import { ListContainer, Title, TitleContainer, Wrapper } from './Styles';

interface CategoryProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  color?: string;
}

const Category = (props: CategoryProps) => {
  const { title, children, color } = props;
  return (
    <Wrapper>
      <TitleContainer>
        <Title color={color}>{title}</Title>
      </TitleContainer>
      <ListContainer>{children}</ListContainer>
    </Wrapper>
  );
};

export default Category;
