import styled from 'styled-components';
import colors from '../../styles/colors';

interface OptionI {
  isActive: boolean;
}

export const Option = styled.li<OptionI>`
  border-radius: 50px;
  border-color: ${colors.white};
  border-style: solid;
  border-width: 1px;
  padding: 10px 20px;
  background-color: ${props => (props.isActive ? colors.gray : colors.blue2)};
  cursor: pointer;
  margin-right: 13px;
  &:hover {
    background-color: ${colors.blue};
  }
`;

export const TitleLabel = styled.a`
  color: ${colors.white};
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.061em;
  white-space: nowrap;
`;
