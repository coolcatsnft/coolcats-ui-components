import React, { PropsWithChildren } from 'react';
import Svg, { SvgProps } from './Svg';
import Styled from '../Styled';

type MenuProps = SvgProps & PropsWithChildren & {
  open?: boolean;
}

const Path = Styled.path<{ $dashArray: string, $strokeDashOffset?: string, stroke?: string }>`
  fill: none;
  stroke: ${({ stroke }) => stroke || 'var(--cc-color-primary)'};
  stroke-width: 10;
  stroke-dasharray: ${({ $dashArray }) => $dashArray};
  stroke-dashoffset: ${({ $strokeDashOffset }) => $strokeDashOffset || '0'};
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Icon: React.FC<MenuProps> = (props) => {
  const { open, stroke } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width='20' {...props}>
      <Path stroke={stroke} $dashArray={open ? '90 207' : '60 207'} $strokeDashOffset={open ? '-134' : '0'} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
      <Path stroke={stroke} $dashArray={open ? '1 60;' : '60 60'} $strokeDashOffset={open ? '-30' : '0'} d="M 20,50 H 80" />
      <Path stroke={stroke} $dashArray={open ? '90 207' : '60 207'} $strokeDashOffset={open ? '-134' : '0'} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
    </Svg>
  )
};

export default Icon;
