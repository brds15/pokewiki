import React from 'react';
import { Normalize } from 'styled-normalize';
import Home from './Home';
import { StyleContainer, Content, Wrapper } from '../styles/globals';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailProvider from '../context/DetailProvider';

function App() {
  return (
    <>
      <Normalize />
      <StyleContainer>
        <DetailProvider>
          <Header />
          <Content>
            <Wrapper>
              <Home />
            </Wrapper>
          </Content>
          <Footer />
        </DetailProvider>
      </StyleContainer>
    </>
  );
}

export default App;
