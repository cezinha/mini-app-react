import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { RiBillLine } from 'react-icons/ri';

import { Card } from './style';

interface Props {
  date: Date;
  name: string;
  description?: string;
  value: number;
  type: string;
  tag?: string;
}

const Icon = ({ tag }: { tag: string }) => {
  switch (tag) {
    case 'service':
      return <RiBillLine />;
    case 'food':
      return <IoFastFoodOutline />;
    case 'shopping':
      return <HiOutlineShoppingBag />;
  }
  return <BsThreeDots />;
};

const Line = ({ date, name, description, value, type, tag }: Props) => {
  const fmt = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }).format(date);
  const curr = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
  return (
    <Card>
      {tag && (
        <Card.Icon>
          <Icon tag={tag} />
        </Card.Icon>
      )}
      <Card.Detail>
        <Card.Title>{name}</Card.Title>
        <Card.Description>
          {fmt} {description && `- ${description}`}
        </Card.Description>
      </Card.Detail>
      <Card.Price className={type}>{curr}</Card.Price>
    </Card>
  );
};

export default Line;
