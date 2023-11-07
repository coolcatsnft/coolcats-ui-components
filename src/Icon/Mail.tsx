import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 14" width='20' {...props}>
    <path d="M0.500088 0.978509C0.500029 0.9833 0.5 0.9881 0.5 0.992907V13.0071C0.5 13.5555 0.881034 14 1.35106 14H19.6489C20.119 14 20.5 13.5555 20.5 13.0071V1.31546L12.1876 9.58018C11.3128 10.4499 10.0262 10.4499 9.15142 9.58018L0.500088 0.978509Z" />
    <path d="M19.8318 0.0229761C19.7729 0.00792924 19.7117 0 19.6489 0H1.48407L9.97946 8.44662C10.3771 8.84195 10.9619 8.84195 11.3595 8.44662L19.8318 0.0229761Z" />
  </Svg>
);

export default Icon;
