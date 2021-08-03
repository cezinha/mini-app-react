import React from 'react';

import { Card } from './style';

interface Props {
  date: Date;
  value: number;
  showBalance: boolean;
}

const Balance = ({ date, value, showBalance }: Props) => {
  const fmt = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Sao_Paulo'
  }).format(date);
  const curr = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
  return (
    <Card>
      <Card.Detail>
        <Card.Title>{fmt}</Card.Title>
      </Card.Detail>
      {showBalance && (
        <Card.Price className={value < 0 ? 'debit' : 'credit'}>
          {curr}
        </Card.Price>
      )}
    </Card>
  );
};

export default Balance;
