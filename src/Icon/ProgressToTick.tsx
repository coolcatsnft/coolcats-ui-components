import React, { PropsWithChildren } from 'react';
import { css, keyframes } from 'styled-components';
import Svg, { SvgProps } from './Svg';
import Styled from '../Styled';

type TickProps = SvgProps & PropsWithChildren & {
  ticked?: boolean;
}

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
    stroke-dashoffset: 66;
  } 
  50% {
    transform: rotate(540deg);
    stroke-dashoffset: 314;
  } 
  100% {
    transform: rotate(1080deg);
    stroke-dashoffset: 66;
  }
`;

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const Base = Styled.circle<{ stroke?: string }>`
  fill: none;
  stroke: ${({ stroke }) => stroke || 'var(--cc-color-primary)'};
  stroke-width: 12;
`

const Circle = Styled(Base)<{ $ticked?: boolean }>`
  transform-origin: 50px 50px 0;
  stroke-dasharray: 314;
  stroke-dashoffset: 1000;
  animation: ${spin} 3s linear infinite;

  ${({ $ticked }) => $ticked && css`
    stroke-dashoffset: 66;
    stroke-dasharray: 1000;
    stroke: var(--cc-color-success);
  `}
`;

const Polyline = Styled(Base)<{ $ticked?: boolean }>`
  opacity: ${({ $ticked}) => $ticked ? 1 : 0};

  ${({ $ticked }) => $ticked && css`
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${draw} 8s ease-out forwards;
    stroke: var(--cc-color-success);
  `}
`;

const Icon: React.FC<TickProps> = (props) => {
  const { ticked } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 120 120" width='20' {...props}>
      <Circle cx="50" cy="50" r="46" {...props} $ticked={ticked} />
      <Polyline as='polyline' points="25,55 45,70 75,33" {...props} $ticked={ticked} />
    </Svg>
  )
};

export default Icon;
