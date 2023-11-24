import { css } from "styled-components";
import Styled from "../Styled";
import { ButtonSizeType } from "../constants";
import { elementHeightPartial, largeElementHeightPartial } from "../partials";

const StyledFilledLabel = Styled.h4<{ $size?: ButtonSizeType }>`
  display: inline-block;
  background: var(--cc-color-rainoreblue);
  color: var(--cc-color-white);
  font-family: var(--cc-hero-font);
  font-style: normal;
  font-weight: 460;
  text-transform: capitalize;
  user-select: none;

  ${elementHeightPartial}
  font-size: 22px;
  border-radius: 4px;

  ${({ $size }) => $size === 'large' && css`
    ${largeElementHeightPartial}
    font-size: 30px;
    border-radius: 4px;
  `}
`;

export default StyledFilledLabel;