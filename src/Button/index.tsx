import React, { forwardRef, useState } from "react";
import styled from "../Styled";
import { styledButtonPartial, styledCircleButtonPartial } from "../partials";
import { CoolCatsUITheme } from "../constants";

export type ButtonThemeType = {
  $extended?: boolean;
  $theme?: CoolCatsUITheme;
  $circle?: boolean;
}

export type ButtonType = React.ComponentProps<"button"> & ButtonThemeType;

export const ButtonTheme = (props: ButtonThemeType) => {
  const { $extended, $theme, $circle } = props;
  return `
    ${$circle ===  true ? `${styledCircleButtonPartial}`: `${styledButtonPartial}`}

    ${$extended === true ? `
      width: 100%;
    ` : ``}

    ${typeof $theme !== 'undefined' ? `
      color: var(--cc-font-color-${$theme.toLowerCase()});
      background-color: var(--cc-color-${$theme.toLowerCase()});
    ` : ``}

    ${typeof $theme !== 'undefined' && $theme === CoolCatsUITheme.PRIMARY ? `
      &:not(:active) {
        box-shadow: 4px 4px 0px 0px var(--cc-color-disabled);
      }
    ` : ``}
  `;
};

const StyledButton = styled.button<ButtonType>`
  ${({ $extended, $theme, $circle }) => ButtonTheme({$extended, $theme, $circle})}
`;

export const Button = forwardRef((props: ButtonType, ref) => {
  const [promising, setPromising] = useState(false);
  const { onClick: propsOnClick, disabled } = props;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (propsOnClick) {
      const r = propsOnClick(e) as any;
      if (r instanceof Promise) {
        return new Promise((res: Function) => {
          setPromising(true);
          r.finally(() => {
            setPromising(false);
            res();
          })
        })
      }

      return Promise.resolve(r);
    }

    return Promise.resolve();
  }

  return (
    <StyledButton {...props as any} ref={ref} onClick={onClick} disabled={disabled || promising} />
  )
});

export default Button;
