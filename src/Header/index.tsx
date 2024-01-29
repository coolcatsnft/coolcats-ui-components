import { MouseEventHandler, ReactElement, ReactNode, forwardRef, useState } from "react";
import styled from "../Styled";
import { device } from "../constants";
import IconButton from "../IconButton";
import { MenuIcon } from "../Icon";

const StyledHeader = styled.header`
  height: var(--cc-mobile-header-height);
  background-color: var(--cc-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${device.laptop} {
    height: var(--cc-desktop-header-height);
  }
`;

const StyledHeaderLogo = styled.div`
  position: relative;
  z-index: 2;
  img {
    height: 40px;
    display: block;
    ${device.laptop} {
      height: 61px;
    }
  }

  a {
    display: flex;
    transition: 0.24s ease;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const UserMenuNav = styled.nav<{ visible?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 100%;
  height: 100%;
  gap: var(--cc-gap);
  position: absolute;
  z-index: ${({ visible }) => visible ? '3' : '1'};

  > button {
    right: 4px;
    position: absolute;

    &[title="Close Menu"],
    &[title="Open Menu"] {
      ${device.laptop} {
        display: none;
      }
    }
  }

  ${device.laptop} {
    right: calc(var(--cc-gap) * 2);
    gap: calc(var(--cc-gap) * 2);
    padding: var(--cc-gap);
    padding-right: 0;
    width: auto;
  }
`;

export const UserMenuNavButtons = styled.div<{ visible?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--cc-gap);
  position: absolute;
  background-color: var(--cc-color-primary);
  padding-left: 4px;
  width: 100%;
  height: 100%;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  pointer-events: ${({ visible }) => visible ? 'all' : 'none'};

  ${device.mobileL} {
    justify-content: center;
  }

  ${device.laptop} {
    justify-content: center;
    position: static;
    width: auto;
  }

  ${device.laptop} {
    opacity: 1;
    pointer-events: all;
  }
`;

export type HeaderProps = {
  icons?: {
    title: string,
    label?: string,
    icon: ReactElement,
    active?: boolean,
    clickAction: MouseEventHandler<HTMLButtonElement>
  }[],
  menuClickAction?: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode | [ReactNode, ReactNode]
};

export const Header = forwardRef((props: HeaderProps, ref: any) => {
  const [visible, setVisible] = useState(false);

  const {
    children,
    icons,
    menuClickAction
  } = props;

  const isTwoChildren = Array.isArray(children) && children.length === 2;

  const onMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(v => !v);
    if (menuClickAction) {
      menuClickAction(e);
    }
  }

  return (
    <StyledHeader ref={ref}>
      {!isTwoChildren && <StyledHeaderLogo>
        {children || null}
      </StyledHeaderLogo>}
      {isTwoChildren && <StyledHeaderLogo>
        {children[0]}
      </StyledHeaderLogo>}
      <UserMenuNav visible={visible}>
        <UserMenuNavButtons visible={visible}>
          {(icons || [])?.map((icon, i) => (
            <IconButton key={i} title={icon.title} active={icon.active} onClick={icon.clickAction}>
              <i>{icon.icon}</i>
              {icon.label || icon.title}
            </IconButton>  
          ))}
          {isTwoChildren && <>
            {children[1]}
          </>}
        </UserMenuNavButtons>
        {((icons || []).length > 0 || isTwoChildren || menuClickAction) && (
          <IconButton onClick={onMenuClick} title={visible ? 'Close Menu' : 'Open Menu'}>
            <i><MenuIcon open={visible} /></i>
            {visible ? 'Close' : 'Menu'}
          </IconButton>
        )}
      </UserMenuNav>
    </StyledHeader>
  )
});

export default Header;