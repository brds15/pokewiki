import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  background-color: ${colors.blue};
  border-radius: 23px;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  min-width: 130px;
  height: 180px;
  margin-right: 8px;
  cursor: pointer;
`;

export const NameLabel = styled.span`
  width: 100%;
  text-align: center;
  color: ${colors.primary};
  font-weight: 700;
  text-transform: capitalize;
`;
