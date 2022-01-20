import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  }
  *{
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color:#f5f6f7;
  }
}
`;

export default GlobalStyle;
