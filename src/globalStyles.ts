import { createGlobalStyle } from 'styled-components';
import ITheme from './common/types/theme/ITheme';

export const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
  * {
    padding:0px;
    margin:0px;
    font-family: 'Oswald', sans-serif;
  }

  body{
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
