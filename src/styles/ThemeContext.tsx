import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

export default function ThemeContext({ children }: any) {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <ThemeProvider theme={theme}>
      {' '}
      {children}
    </ThemeProvider>
  );
}
