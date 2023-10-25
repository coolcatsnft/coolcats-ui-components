import React from 'react';
import Svg, { SvgProps } from './Svg';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25" width='20' {...props} fill='none'>
    <path d="M10.9999 9.495V19.585M7.12992 9.495L7.67992 19.585M14.8699 9.495L14.3199 19.585M1.91992 5.295H20.0799M16.8199 23.285H5.17992C4.60992 23.285 4.13992 22.855 4.10992 22.315L3.23992 5.735C3.22992 5.505 3.40992 5.305 3.63992 5.305H18.3599C18.5899 5.305 18.7699 5.495 18.7599 5.735L17.8899 22.315C17.8599 22.865 17.3899 23.285 16.8199 23.285ZM8.01992 1.715C7.80992 1.715 7.62992 1.885 7.55992 2.135L6.67992 5.295H15.3199L14.4399 2.135C14.3699 1.885 14.1799 1.715 13.9799 1.715H8.01992Z" stroke='var(--cc-color-primary)' fill='none' strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
  </Svg>
);

export default Icon;
