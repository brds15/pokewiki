import React from 'react';
import { ResizeContainer, DetailContainer, FooterContainer, Wrapper, HoldIcon } from './Styles';

const Footer = () => {
  return (
    <Wrapper>
      <DetailContainer>
        <ResizeContainer>
          <HoldIcon />
        </ResizeContainer>
      </DetailContainer>
      <FooterContainer>
        <span>By brds15</span>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
