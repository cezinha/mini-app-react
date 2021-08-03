import React from 'react';
import Shimmer from '../../components/ui/Shimmer';
import View from '../../components/ui/View';
import { Box, Container } from './style';

export default ({ match }) => (
  <View>
    <Container>
      <h1>Bem vindo</h1>
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
    </Container>
  </View>
);
