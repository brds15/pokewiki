import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 14px 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  grid-area: header;
  background-color: ${colors.orange};
`;

export const RightSide = styled.div`
  flex-direction: row;
  align-items: center;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-weight: 700;
`;

export const ButtonIcon = styled.div`
  margin-left: 20px;
`;
