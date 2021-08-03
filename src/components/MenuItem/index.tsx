import React from 'react';

import { Item } from './style';
interface Props {
  onClick: () => void;
  label: string | JSX.Element;
  active?: boolean;
}

export default ({ label, onClick, active = false }: Props) => (
  <Item onClick={onClick} $active={active}>
    {label}
  </Item>
);
