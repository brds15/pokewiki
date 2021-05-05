import styled from 'styled-components';
import colors from '../../styles/colors';

interface NameLabelI {
  color?: string;
}

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h3<NameLabelI>`
  text-align: left;
  letter-spacing: 0.101em;
  color: ${props => (props.color ? props.color : colors.white)};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;

  justify-content: flex-start;
`;
