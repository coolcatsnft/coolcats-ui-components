import { device } from "./constants";

export const wrapperWidthPartial = `
  max-width: var(--cc-site-width);
  width: 100%;
  margin: 0 auto;
  padding-left: var(--cc-wrapper-spacing);
  padding-right: var(--cc-wrapper-spacing);

  ${device.desktop} {
    padding: 0;
  }
`;

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

export const elementHeightPartial = `
  line-height: 28px;
  height: 32px;
  padding: 0 22px;
  padding-bottom: 4px;
  border-radius: var(--cc-radius);
`;

export const largeElementHeightPartial = `
  line-height: 44px;
  height: 48px;
  padding: 0 30px;
  padding-bottom: 4px;
  border-radius: calc(var(--cc-radius) + 4px);
`;

export const styledInputPartial = `
  border: 0 none;
  background: var(--cc-color-primary);
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid var(--cc-color-primary);
  background: var(--cc-color-white);
  outline-offset: 4px;
  transition-duration: 0.1s;
  color: var(--cc-font-color-primary);

  ${fontFamilyPartial}
  ${elementHeightPartial}
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

  &:hover {
    &:not([disabled]) {
      transform: translateY(-1px);
      box-shadow: 5px 5px 0px 0px var(--cc-color-primary);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5), box-shadow 250ms cubic-bezier(.3, .7, .4, 1.5);
    }
  }

  &:active {
    &:not([disabled]) {
      box-shadow: 0 0 0 0 var(--cc-color-primary);
      transform: translateX(4px) translateY(4px);
      transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5), box-shadow 250ms cubic-bezier(.3, .7, .4, 1.5);
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