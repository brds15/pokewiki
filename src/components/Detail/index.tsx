import React, { useContext } from 'react';
import { DetailContainer, HoldIcon, ResizeContainer } from './Styles';
import { DetailContext } from '../../context/DetailProvider';

export const Detail = () => {
  const { data } = useContext(DetailContext);

  return data && data.name ? (
    <DetailContainer>
      <ResizeContainer>
        <HoldIcon />
      </ResizeContainer>
      <div>
        <span>color {data.color}</span>
        <span>captureRate {data.captureRate}</span>
        <span>id {data.id}</span>
        <span>isBaby {data.isBaby}</span>
        <span>isLegendary {data.isLegendary}</span>
        <span>name {data.name}</span>
        <span>happiness {data.happiness}</span>
        <span>habitat {data.habitat}</span>
      </div>
    </DetailContainer>
  ) : (
    <></>
  );
};

export default Detail;
