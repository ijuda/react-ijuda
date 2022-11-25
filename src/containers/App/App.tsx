import { ThemeProvider } from '@mui/material';
import Global from '@styles/global.styles';
import { DarkTheme } from '@styles/themes/Dark';
import AuthProvider from '@context/auth/AuthProvider';

type Props = {
  children?: JSX.Element;
};
function App({ children }: Props) {
  return (
    <AuthProvider>
      <ThemeProvider theme={DarkTheme}>
        <div className="App">{children}</div>
        <Global />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
