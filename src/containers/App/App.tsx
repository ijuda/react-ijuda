import { ThemeProvider } from "@mui/material";
import Global from "@styles/global.styles";
import { DarkTheme } from "@styles/themes/Dark";

type Props = {
  children?: any;
};

function App({ children }: Props) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App">{children}</div>
      <Global />
    </ThemeProvider>
  );
}

export default App;
