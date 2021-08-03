import React, { useState } from 'react';
import { BiHomeAlt, BiCreditCard, BiDollarCircle } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';

import MenuItem from '../MenuItem';
import { Container, Nav, IconButton, IconLabel } from './style';

interface Props {
  current?: number;
}
const Menu = ({ current = 0 }: Props) => {
  const history = useHistory();
  const [active, setActive] = useState(current);
  const options = [
    {
      label: (
        <IconButton>
          <BiHomeAlt />
          <IconLabel>Home</IconLabel>
        </IconButton>
      ),
      link: '/'
    },
    {
      label: (
        <IconButton>
          <BiDollarCircle />
          <IconLabel>Transações</IconLabel>
        </IconButton>
      ),
      link: '/transaction'
    },
    {
      label: (
        <IconButton>
          <BiCreditCard />
          <IconLabel>Cartões</IconLabel>
        </IconButton>
      ),
      link: '/cards'
    }
  ];
  return (
    <Nav>
      <Container>
        {options.map((o, i) => (
          <MenuItem
            key={i}
            label={o.label}
            active={i === active}
            onClick={() => {
              history.push(o.link);
              setActive(i);
            }}
          />
        ))}
      </Container>
    </Nav>
  );
};


export default Menu;
