import styled from 'styled-components';

export const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Container = styled.div`
  max-width: 798px;
  margin: 0 auto;
  padding: 16px;

  & h1 {
    font-size: 24px;
    margin: 0 0 16px;
  }
`;
