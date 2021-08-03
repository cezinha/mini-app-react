import React from 'react';

import { Photo, Line, Shimmer } from './style';

interface Props {
  type: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
export default ({ type, width, height, style }: Props) =>
  type === 'photo' ? (
    <Photo style={{ ...style, width, height }} />
  ) : type === 'line' ? (
    <Line style={{ ...style, width, height }} />
  ) : (
    <Shimmer style={{ ...style, width, height }} />
  );
