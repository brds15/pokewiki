import styled from 'styled-components';
import colors from '../../styles/colors';
import { ReactComponent as HoldSVG } from '../../images/minus.svg';
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

export const DetailContainer = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  height: 5vh;
  border-radius: 26px 26px 0 0;
`;

export const HoldIcon = styled(HoldSVG)`
  
`;

export const ResizeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: ns-resize;
`;
