import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export const PageSlider = styled.div`
  height: calc(100vh - 67px);

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
