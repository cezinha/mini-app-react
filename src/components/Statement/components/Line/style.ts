import styled from 'styled-components';

export const Card: any = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 48px 1fr 30%;
  background: #fff;
  margin: 0 16px 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

Card.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #009999;
  border-radius: 4px;
  width: 36px;
  height: 36px;

  & svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

Card.Date = styled.div`
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

Card.Detail = styled.div``;
Card.Title = styled.div`
  font-size: 14px;
  line-height: 1.2em;
  margin-bottom: 6px;
`;
Card.Description = styled.div`
  font-size: 11px;
  color: #888;
  line-height: 1.2em;
`;
Card.Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 600;

  &.credit {
    color: #00b3b3;
  }
  &.debit {
    color: black;
  }
`;
