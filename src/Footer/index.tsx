import { ReactNode } from "react";
import { device } from "../constants";
import Styled from "../Styled";
import { wrapperWidthPartial } from "../partials";

const Outer = Styled.footer`
  padding-top: 48px;

  ${device.laptop} {
    padding-top: 80px;
  }
`;

const Inner = Styled.div`
  display: flex;
  background-image: url('/images/footer.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 150% auto;
  overflow: hidden;
  padding: 40% 0 32px 0;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  justify-content: center;

  ${device.laptop} {
    padding-top: 25%;
    background-size: cover;
    gap: 40px;
    margin-top: var(--cc-gap);
    padding-bottom: 50px;
  }
`;

const Logo = Styled.img`
  margin: 0 auto;
  display: block;
  width: 160px;
  height: auto;
  margin-bottom: var(--cc-gap);

  ${device.tablet} {
    margin: 0;
    margin-right: 112px;
    width: 237px;
  }
`;

const OuterMenu = Styled.div`
  ${wrapperWidthPartial};
  display: flex;
  flex-direction: column;
  gap: var(--cc-gap);

  ${device.tablet} {
    flex-direction: row;
    gap: 0;
    align-items: flex-start;
  }

  ${device.laptop} {
    align-items: center;
  }
`;

type FooterProps = {
  src: string,
  children: [ReactNode, ReactNode]
}

export default function Footer({ src, children }: FooterProps) {
  return (
    <Outer>
      <OuterMenu>
        <Logo width='158' height='49' alt='Cool Cats Logo' src={src} />
      </OuterMenu>
      <Inner>
        {children}
      </Inner>
    </Outer>
  )
}