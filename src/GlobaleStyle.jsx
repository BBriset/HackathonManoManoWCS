import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color--primary: rgb(80, 89, 113);
    --color--secondary: rgb(12, 25, 58);
    --color--thirdary: rgb(83, 186, 173);
    --color--fourthy: rgb(72, 87, 150);
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
