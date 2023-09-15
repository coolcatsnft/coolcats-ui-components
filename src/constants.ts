
export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobile: 425,
  sitecontent: 600,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  desktop: 1321,
  laptopL: 1440,
  desktopL: 2560,
  Max: 9999999,
};

export const device = {
  mobileS: `@media screen and (min-width: ${breakpoints.mobileS}px)`,
  mobileM: `@media screen and (min-width: ${breakpoints.mobileM}px)`,
  below_mobileM: `@media screen and (max-width: ${breakpoints.mobileM}px)`,
  mobileL: `@media screen and (min-width: ${breakpoints.mobileL}px)`,
  mobileLandscape: `@media screen and (orientation:landscape) and (max-width: ${breakpoints.tablet}px)`,
  tabletLandscape: `@media screen and (orientation:landscape) and (max-width: ${breakpoints.laptop}px)`,
  below_mobileL: `@media screen and (max-width: ${breakpoints.mobileL}px)`,
  sitecontent: `@media screen and (min-width: ${breakpoints.sitecontent}px)`,
  below_sitecontent: `@media screen and (max-width: ${breakpoints.sitecontent}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  below_tablet: `@media screen and (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media screen and (min-width: ${breakpoints.laptop}px)`,
  laptopM: `@media screen and (min-width: ${breakpoints.laptopM}px)`,
  below_laptop: `@media screen and (max-width: ${breakpoints.laptop}px)`,
  below_desktop: `@media screen and (max-width: ${breakpoints.desktop}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  laptopL: `@media screen and (min-width: ${breakpoints.laptopL}px)`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
  retina: `@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)`,
  retinaLaptop: `
    @media 
    only screen and (-webkit-min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints.laptop}px),
    only screen and (min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints.laptop}px)`,
  retinaDesktop: `
    @media 
    only screen and (-webkit-min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints.desktop}px),
    only screen and (min-device-pixel-ratio : 1.5) and (min-width: ${breakpoints.desktop}px)`,
};

export enum CoolCatsUITheme {
  PRIMARY = 'PRIMARY',
  YELLOW = 'YELLOW',
  BLUECAT = 'BLUECAT',
  JORED = 'JORED',
  ARDIGREY = 'ARDIGREY',
  WHITE = 'WHITE'
}