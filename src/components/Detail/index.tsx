import React, { useContext } from 'react';
import { DetailContainer, HoldIcon, ResizeContainer } from './Styles';
import { DetailContext } from '../../context/DetailProvider';

export const Detail = () => {
  const { data } = useContext(DetailContext);
  console.log('data::', data);
  return (
    <DetailContainer>
      <ResizeContainer>
        <HoldIcon />
      </ResizeContainer>
      <div />
    </DetailContainer>
  );
};

export default Detail;
