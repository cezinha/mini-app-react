import styled, { css } from 'styled-components';

interface ItemProps {
  $active: boolean;
}

export const Item = styled.div<ItemProps>`
  padding: 6px;
  margin: 0 4px;
  color: #999;
  cursor: pointer;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 32px;
    height: 32px;
  }
  ${props =>
    props.$active &&
    css`
      color: #00b3b3;
    `};
`;
