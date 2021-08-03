import React from 'react';

import { data } from '../../mocks/statement.json';
import Balance from './components/Balance';
import Line from './components/Line';
import { Container } from './style';

const Statement = () => {
  const items = data.sort((a, b) => b.date < a.date ? -1 : 1);
  return (
    <Container>
      {items.map((d, i) => (
        d.type === 'balance' ? 
          (<Balance 
            key={i}
            date={new Date(d.date)}
            value={d.value}
            showBalance={i === 0}
          />) : 
          (<Line
            key={i}
            date={new Date(d.date)}
            name={d.name}
            description={d.description ?? ''}
            value={d.value}
            type={d.type}
            tag={d.tag}
          />)
      ))}
    </Container>
  );
};

export default Statement;
