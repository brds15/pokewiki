import React from 'react';
import { Wrapper, NameLabel } from './Styles';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <Wrapper>
      <NameLabel>{title}</NameLabel>
    </Wrapper>
  );
};

export default Card;
