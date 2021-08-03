import styled from 'styled-components';

export const Card: any = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 30%;
`;

Card.Date = styled.div`
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

Card.Detail = styled.div``;
Card.Title = styled.span`
  font-size: 12px;
  line-height: 1.4em;
  background: rgba(27, 126, 126, 0.2);
  color: #092a2a;
  padding: 2px 8px;
  border-radius: 12px;
`;
Card.Description = styled.div`
  font-size: 11px;
  color: #ccc;
`;
Card.Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;

  &.credit {
    color: #00b3b3;
  }
  &.debit {
    color: black;
  }
`;
