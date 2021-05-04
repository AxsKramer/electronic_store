import  {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  html{
    width: 100vw;
    overflow-x: hidden;
  }
  body{
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;