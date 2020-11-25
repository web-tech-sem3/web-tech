import React from 'react';

const items = range(4);
const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const Loading = () => {
  return <div></div>;
};
export default Loading;
