import React from 'react';
import { Option,TitleLabel } from './Styles';

interface NavOptionProps {
  title: string;
}

const NavOption = (props: NavOptionProps) => {
  const { title } = props;

  return <Option {...props}><TitleLabel>{title}</TitleLabel></Option>;
};

export default NavOption;
