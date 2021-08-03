import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  background: #fff;
  padding: 4px 15%;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 3px;
`;

export const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconLabel = styled.div`
  font-size: 11px;
`;
