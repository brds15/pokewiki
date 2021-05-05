import styled from 'styled-components';
import { ReactComponent as HoldSVG } from '../../images/minus.svg';
import colors from '../../styles/colors';

export const ResizeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: ns-resize;
`;

export const HoldIcon = styled(HoldSVG)``;

export const DetailContainer = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 5vh;
  border-radius: 26px 26px 0 0;
`;
