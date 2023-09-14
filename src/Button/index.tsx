import React, { useState } from "react";
import styled, { css } from "styled-components";
import { styledButtonPartial } from "../partials";
import { CoolCatsUITheme } from "../constants";

export type ButtonThemeType = {
  $extended?: boolean;
  $theme?: CoolCatsUITheme
}

export type ButtonType = React.ComponentProps<"button"> & ButtonThemeType;

export const ButtonTheme = (props: ButtonThemeType) => {
  const { $extended, $theme } = props;
  return `
    ${styledButtonPartial}

    ${$extended && `
      width: 100%;
    `}

    ${$theme && `
      color: var(--cc-font-color-${$theme.toLowerCase()});
      background-color: var(--cc-color-${$theme.toLowerCase()});
    `}

    ${$theme === CoolCatsUITheme.PRIMARY && `
      &:not(:active) {
        box-shadow: 4px 4px 0px 0px var(--cc-color-disabled);
      }
    `}
  `;
};

const StyledButton = styled.button<{ $extended?: boolean, $theme?: CoolCatsUITheme }>`
  ${({ $extended, $theme }) => ButtonTheme({$extended, $theme})}
`

export function Button(props: ButtonType) {
  const [promising, setPromising] = useState(false);
  const { onClick: propsOnClick, disabled, title } = props;

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
    <StyledButton {...props} onClick={onClick} disabled={disabled || promising} />
  )
}

export default Button;
