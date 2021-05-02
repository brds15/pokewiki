import styled from 'styled-components';
import colors from '../../styles/colors';
import { ReactComponent as BrSVG } from '../../images/br.svg';
import { ReactComponent as UsSVG } from '../../images/us.svg';
import { ReactComponent as IconSVG } from '../../images/superball.svg';

export const Container = styled.div`
  padding: 14px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  grid-area: header;
  background-color: ${colors.blue};
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 70%;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-weight: 700;
`;

export const ButtonLangIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const UsIcon = styled(UsSVG)`
  margin-left: 8px;
  cursor: pointer;
`;

export const BrIcon = styled(BrSVG)`
  cursor: pointer;
`;

export const IconHome = styled(IconSVG)`
  margin-right: 11px;
`;
