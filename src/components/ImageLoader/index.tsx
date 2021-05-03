import React, { useMemo } from 'react';
import { PokeBallsImage, Wrapper } from './Styles';

const ImageLoader = () => {
  const pokeBalls = useMemo(() => <PokeBallsImage />, []);
  return <Wrapper>{pokeBalls}</Wrapper>;
};

export default ImageLoader;
