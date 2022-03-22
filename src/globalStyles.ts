import { createGlobalStyle } from 'styled-components';
import ITheme from './common/types/theme/ITheme';

export const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
  * {
    padding:0px;
    margin:0px;
    font-family: 'Oswald', sans-serif;
  }

  body{
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
