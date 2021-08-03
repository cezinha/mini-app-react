import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 67px);
  position: relative;
`;

export const PageSlider = styled.div`
  & .page-enter > div {
    z-index: 10;
    transform: translate3d(-100%, 0, 0);
  }
  & .page-enter-active > div {
    transform: translate3d(0, 0, 0);
    transition: transform 300ms;
  }
  & .page-exit > div {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  & .page-exit-active > div {
    transform: translate3d(100%, 0, 0);
    transition: transform 300ms;
  }
  &.right .page-enter > div {
    z-index: 10;
    transform: translate3d(100%, 0, 0);
  }
  &.right .page-enter-active > div {
    transform: translate3d(0, 0, 0);
    transition: transform 300ms;
  }
  &.right .page-exit > div {
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
  &.right .page-exit-active > div {
    transform: translate3d(-100%, 0, 0);
    transition: transform 300ms;
  }
`;

export const Page = styled.div`
  position: absolute;
  height: calc(100vh - 56px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #ccc;
  flex-direction: column;
`;
