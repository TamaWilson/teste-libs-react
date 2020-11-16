import { createGlobalStyle } from 'styled-components';
import { PublicSansFontFace } from '../assets/fonts';

export default createGlobalStyle`
  ${PublicSansFontFace};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  },
  html, body {
    font-family: 'PublicSans-Regular', sans-serif;
    font-size: 100%;
  }
`;
