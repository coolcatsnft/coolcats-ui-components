import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='20' {...props} fill="none" stroke="var(--cc-color-primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <rect height="7.5" width="10.5" y="6.75" x="2.75"/>
    <path d="m4.75 6.25s-1-4.5 3.25-4.5 3.25 4.5 3.25 4.5" fill="none" />
  </Svg>
);

export default Icon;
