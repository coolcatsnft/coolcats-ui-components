import { SVGAttributes } from 'react';
import styled from 'styled-components';

export type SvgProps = SVGAttributes<HTMLOrSVGElement>;

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  flex-shrink: 0;
  fill: ${({ color }) => color || 'var(--cc-color-primary)'};

  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true))
    and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;

export default Svg;
