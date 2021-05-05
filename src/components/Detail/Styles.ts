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
  height: 20vh;
  border-radius: 26px 26px 0 0;
  text-transform: capitalize;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 44px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 0.7rem;
  color: ${colors.gray};
`;

export const Value = styled.span`
  margin-top: 4px;
  text-transform: capitalize;
  font-size: 1.2rem;
  color: ${colors.blue};
`;
