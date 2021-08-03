import React from 'react';
import Line from './components/Line';
import Balance from './components/Balance';
import { data } from '../../mocks/statement.json';

import { Container } from './style';

export default () => {
  const items = data.sort((a, b) => b.date < a.date ? -1 : 1);
  return (
    <Container>
      {items.map((d, i) => (
        d.type === 'balance' ? 
          (<Balance 
            key={i}
            date={new Date(d.date)}
            name={d.name}
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
