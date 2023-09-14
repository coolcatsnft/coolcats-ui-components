import { createGlobalStyle, css } from 'styled-components';

const Variables = {
  'button-radius': '40px',
  radius: '20px',
  gap: '20px',
  'default-font': '-apple-system, BlinkMacSystemFont, Ubuntu, Helvetica Neue, sans-serif',
  'default-font-size': '1rem',


  // Colours
  'color-white': 'white',
  'font-color-white': 'var(--cc-color-primary)',
  'color-primary': '#231F20',
  'font-color-primary': 'white',
  'color-yellow': '#FAD121',
  'font-color-yellow': 'var(--cc-color-primary)',
  'color-disabled-bg': '#E6EBED',
  'font-color-disabled-bg': 'var(--cc-color-primary)',
  'color-disabled': '#706666',
  'font-color-disabled': 'var(--cc-color-primary)',
  'color-dark-grey': '#706666',
  'font-color-dark-grey': 'white',
  'color-bluecat': '#90CFF1',
  'font-color-bluecat': 'var(--cc-color-primary)',
  'color-ardigrey': '#C0BFBF',
  'font-color-ardigrey': 'var(--cc-color-primary)',
  'color-jored': '#F24C4C',
  'font-color-jored': 'white',
  'color-rainoreblue': '#0094E3',
  'font-color-rainoreblue': 'var(--cc-color-primary)',
  'color-mallowwhite': '#FFFFFF',
  'font-color-mallowwhite': 'var(--cc-color-primary)',
  'color-outlineblack': 'var(--cc-color-primary)',
  'font-color-outlineblack': 'white',
};

const GlobalStyle = createGlobalStyle`
  :root {
    ${Object.entries(Variables).map(([k, v]) => `--cc-${k}: var(--cc-theme-${k}, ${v});`)}
  }

  *:where(:not(html, iframe, canvas, img, svg, video, audio, input, select):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: all 0.3s;
  }

  body {
    font-size: 62.5%;
  }
`;

export const unselectable = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const styledScrollBars = css`
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 50px rgb(0 0 0 / 30%);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--fracturesgrey2);
    border-radius: 10px;
    outline: 0 solid #708090;
  }
`;

export default GlobalStyle;
