import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  grid-area: footer;
  background-color: ${colors.blue2};
`;

export const FooterContainer = styled.div`
  padding: 10px 16px;
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  background-color: ${colors.black};
  span {
    font-size: 0.7rem;
    font-weight: 400;
    color: ${colors.blue2};
  }
`;
