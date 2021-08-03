import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from '../MenuItem';
import { BiHomeAlt, BiCreditCard, BiDollarCircle } from 'react-icons/bi';
import { Container, Nav, IconButton, IconLabel } from './style';

interface Props {
  current?: number;
}

export default ({ current = 0 }) => {
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
