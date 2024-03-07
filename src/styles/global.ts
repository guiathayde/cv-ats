import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 30px;
    color: #333;
  }
  h2 {
    font-size: 22px;
    color: #333;
  }

  button {
    cursor: pointer;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    html {
      width: 100vw;
    }

    body {
      padding: 10px;
    }
  }
`;
