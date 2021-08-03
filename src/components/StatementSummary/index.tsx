import React from 'react';

import { Container } from './style';

interface Props {
  value?: number;
}

export default ({ value = 0 }: Props) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
  return <Container>{currency}</Container>;
};
