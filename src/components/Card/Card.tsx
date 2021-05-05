import React, { InputHTMLAttributes } from 'react';
import { Wrapper, NameLabel } from './Styles';
import ImageLoader from '../ImageLoader';

interface CardProps extends InputHTMLAttributes<any> {
  title: string;
  imageContainer?: JSX.Element | JSX.Element[];
}

const Card = (props: CardProps) => {
  const { title, imageContainer } = props;
  return (
    <Wrapper {...props}>
      {imageContainer || <ImageLoader />}
      <NameLabel>{title}</NameLabel>
    </Wrapper>
  );
};

export default Card;
