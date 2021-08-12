import styled, { keyframes } from 'styled-components';

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`;

export const Shimmer = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 100%;
  display: inline-block;
  position: relative;
  user-select: none;
  font-size: 1em;
  color: transparent;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

export const Photo = styled(Shimmer)`
  width: 120px;
  height: 80px;
  margin: 5px;
  border-radius: 4px;
`;

export const Line = styled(Shimmer)`
  width: 120px;
  height: 14px;
  margin: 8px;
  border-radius: 7px;
`;
