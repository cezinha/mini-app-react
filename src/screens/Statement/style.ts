import styled from 'styled-components';

export const Container = styled.div`
  background: #003d4d;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const Head = styled.div`
  padding: 16px 16px;
  & h1 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
`;
