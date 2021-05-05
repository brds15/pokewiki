import React, { InputHTMLAttributes } from 'react';
import { Option, TitleLabel } from './Styles';

interface NavOptionProps extends InputHTMLAttributes<any> {
  title: string;
  isActive: boolean;
}

const NavOption = (props: NavOptionProps) => {
  const { title } = props;

  return (
    <Option {...props}>
      <TitleLabel>{title}</TitleLabel>
    </Option>
  );
};

export default NavOption;
