import React from 'react';
import Statement from '../../components/Statement';
import StatementSummary from '../../components/StatementSummary';
import View from '../../components/ui/View';
import { Container, Head } from './style';

export default () => (
  <View>
    <Container>
      <Head>
        <h1>Histórico de Transações</h1>
        <StatementSummary value={5117.53} />
      </Head>
      <Statement />
    </Container>
  </View>
);
