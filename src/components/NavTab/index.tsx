import React from 'react';
import { List } from './Styles';

interface NavTabProps {
  children: JSX.Element[] | JSX.Element;
}

const NavTab = (props: NavTabProps) => {
  return <List>{props.children}</List>;
};

export default NavTab;
