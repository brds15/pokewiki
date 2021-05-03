import styled from 'styled-components';
import { ReactComponent as PokeBallsSVG } from '../../images/pokeballs.svg';
import { rotateAnimation } from './Animations';

export const PokeBallsImage = styled(PokeBallsSVG)``;

export const Wrapper = styled.div`
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
