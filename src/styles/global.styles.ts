import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: black;
    color: #FFF;
  }
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    font-weight: 400;
  }
`;
