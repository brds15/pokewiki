import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  text-align: left;
  color: ${colors.white};
  letter-spacing: 0.101em;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;

  justify-content: flex-start;
`;
