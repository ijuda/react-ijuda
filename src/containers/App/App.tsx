import { ThemeProvider } from '@mui/material';
import Global from '@styles/global.styles';
import { DarkTheme } from '@styles/themes/Dark';
import AuthProvider from '@context/auth/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children?: JSX.Element;
};
function App({ children }: Props) {
  return (
    <AuthProvider>
      <ThemeProvider theme={DarkTheme}>
        <div className="App">{children}</div>
        <Global />
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
