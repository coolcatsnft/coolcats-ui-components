import { device } from "./constants";

export const styledButtonText = `
  letter-spacing: 0.8px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const fontFamilyPartial = `
  font-family: var(--cc-default-font), -apple-system, BlinkMacSystemFont, Ubuntu, Helvetica Neue, sans-serif;
`;

export const fontSizePartial = `
  ${device.laptop} {
    font-size: 1.8vh;
  }
  ${device.desktop} {
    font-size: 1rem;
  }
`;

export const styledInputPartial = `
  border: 0 none;
  background: var(--cc-color-primary);
  border-radius: var(--cc-radius);
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 32px;
  padding: 0 30px;
  border: 2px solid var(--cc-color-primary);
  background: var(--cc-color-white);
  outline: none;
  transition-duration: 0.1s;
  color: var(--cc-font-color-primary);

  ${fontFamilyPartial}
  font-size: var(--cc-default-font-size);

  &:not([disabled]) {
    &:hover {
      filter: brightness(1.1);
    }
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: var(--cc-color-disabled-bg);
    border-color: var(--cc-color-disabled);
    color: var(--cc-color-disabled);
    box-shadow: 4px 4px 0px 0px var(--cc-color-disabled);
    color: var(--cc-font-color-disabled);
  }
`;

export const styledButtonPartial = `
  cursor: pointer;
  ${styledInputPartial}
  background: var(--cc-color-yellow);
  color: var(--cc-font-color-yellow);
  box-shadow: 4px 4px 0px 0px var(--cc-color-primary);
  
  ${styledButtonText}

  &:active {
    &:not([disabled]) {
      box-shadow: none;
      transform: translateX(4px) translateY(4px);
    }
  }
`;

export const styledCircleButtonPartial = `
  ${styledButtonPartial}
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
    
  svg {
    height: 100%;
    width: 100%;
    path:not([fill]) {
      fill: var(--cc-color-primary);
    }
  }

  > svg,
  > i {
    height: 24px;
    width: 24px;
    padding: 0;
  }

  &[disabled] {
    i {
      svg {
        path {
          fill: var(--cc-color-disabled);
        }
      }
    }
  }

  span {
    display: none;
  }
`;