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
    a {
      text-decoration: none;
    }

  /* unvisited link */
  a:link {
  color: black;
  }

  /* visited link */
  a:visited {
  color: black;
  }

  /* mouse over link */
  a:hover {
  color: black;
  }

  /* selected link */
  a:active {
  color: black;
  } 
  
}
`;

export default GlobalStyle;
