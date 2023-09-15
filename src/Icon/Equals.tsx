import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = ({ fill, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width='24' {...props}>
    <path d="M22 2L2 2" stroke={fill || 'var(--cc-color-primary)'} strokeWidth="4" strokeLinecap="round"/>
    <path d="M22 14L2 14" stroke={fill || 'var(--cc-color-primary)'} strokeWidth="4" strokeLinecap="round"/>
  </Svg>
);

export default Icon;
