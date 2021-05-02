import styled from 'styled-components';
import 'fontsource-lato/100.css';
import 'fontsource-lato/300.css';
import 'fontsource-lato/400.css';
import 'fontsource-lato/700.css';
import 'fontsource-lato/900.css';
import colors from './colors';

export const StyleContainer = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    'header'
    'content'
    'footer';
  font: 16px 'Lato', sans-serif;
  color: ${colors.black};
  -webkit-font-smoothing: antialiased;
  li {
    list-style-type: none;
  }
  ,
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  background-color: ${colors.blue};
  font: 16px 'Lato', sans-serif;
  color: ${colors.black};
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0;
  overflow: hidden;
  padding: 0 44px;
  background-color: ${colors.blue2};
  border-radius: 26px 26px 0 0;
  height: 100%;
`;
