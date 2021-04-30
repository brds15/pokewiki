import React from 'react';
import { Normalize } from 'styled-normalize';
import Home from './Home';
import { StyleContainer, Content } from '../styles/globals';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Normalize />
      <StyleContainer>
        <Header />
        <Content>
          <Home />
        </Content>
        <Footer />
      </StyleContainer>
    </>
  );
}

export default App;
