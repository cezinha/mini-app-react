import React from 'react';

import { Photo, Line, Shimmer } from './style';

interface Props {
  type?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  children?: string | JSX.Element;
}
const ShimmerComponent = ({ type, width, height, style, children }: Props) =>
  type === 'photo' ? (
    <Photo style={{ ...style, width, height }}>{children}</Photo>
  ) : type === 'line' ? (
    <Line style={{ ...style, width, height }}>{children}</Line>
  ) : (
    <Shimmer style={{ ...style, width: width ?? 'auto', height: height ?? 'auto' }}>{children}</Shimmer>
  );

export default ShimmerComponent;
