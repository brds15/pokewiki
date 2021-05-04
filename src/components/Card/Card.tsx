import React from 'react';
import { Wrapper, NameLabel } from './Styles';
import ImageLoader from '../ImageLoader';

interface CardProps {
  title: string;
  imageContainer?: JSX.Element | JSX.Element[];
}

const Card = ({ title, imageContainer }: CardProps) => {
  return (
    <Wrapper>
      {imageContainer || <ImageLoader />}
      <NameLabel>{title}</NameLabel>
    </Wrapper>
  );
};

export default Card;
