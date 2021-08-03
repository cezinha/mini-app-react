import React from 'react';

import { Card } from './style';

interface Props {
  date: Date;
  name: string;
  value: number;
  type: string;
  showBalance: boolean;
}

export default ({ date, name, value, type, showBalance }: Props) => {
  const options = {
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Sao_Paulo'
  };
  const fmt = new Intl.DateTimeFormat('pt-BR', options).format(date);
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
