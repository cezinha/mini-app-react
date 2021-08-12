import React from 'react';

import Shimmer from '../../components/ui/Shimmer';
import View from '../../components/ui/View';
import { Box, Container, Card } from './style';

const BoxContainer = () => (
  <Box>
    <Shimmer
      type="photo"
      style={{
        gridColumnStart: 0,
        gridColumnEnd: 1,
        gridRowStart: 0,
        gridRowEnd: 'span 3'
      }}
    />
    <Shimmer
      type="line"
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 0,
        gridRowEnd: 1
      }}
    />
    <Shimmer
      type="line"
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 2
      }}
    />
    <Shimmer
      type="line"
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 2,
        gridRowEnd: 3
      }}
    />
  </Box>
);

const CardContainer = () => (
  <Card>
    <Shimmer
      type="photo"
      width={50}
      height={50}
      style={{
        borderRadius: '50%',
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 'span 2'
      }}
    />
    <Shimmer
      type="line"
      width="35%"
      style={{
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2
      }}
    />
    <Shimmer
      type="line"
      width="75%"
      style={{
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 3
      }}
    />
  </Card>
);

const Home = () => (
  <View>
    <Container>
      <h1><Shimmer>Bem vindo</Shimmer></h1>
      <BoxContainer />
      <BoxContainer />
      <h2><Shimmer>Atalhos</Shimmer></h2>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </Container>
  </View>
);

export default Home;
