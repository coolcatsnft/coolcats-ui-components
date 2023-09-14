import React, { useState } from "react";
import styled, { css } from "styled-components";
import { styledButtonPartial } from "../partials";
import { CoolCatsUITheme } from "../constants";

const StyledButton = styled.button<{ $extended?: boolean, $theme?: CoolCatsUITheme }>`
  ${styledButtonPartial}

  ${({ $extended }) => $extended && css`
    width: 100%;
  `}

  ${({ $theme }) => $theme && css`
    color: var(--cc-font-color-${$theme.toLowerCase()});
    background-color: var(--cc-color-${$theme.toLowerCase()});
  `}

  ${({ $theme }) => $theme === CoolCatsUITheme.PRIMARY && css`
    &:not(:active) {
      box-shadow: 4px 4px 0px 0px var(--cc-color-disabled);
    }
  `}
`

export type ButtonType = React.ComponentProps<"button"> & {
  $extended?: boolean;
  $theme?: CoolCatsUITheme
}

export default function Button(props: ButtonType) {
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