import { ThemeProvider } from "styled-components";
import colors from "@styles/colors/colors";
import Global from "@styles/global.styles";

type Props = {
  children?: any;
};

function App({ children }: Props) {
  return (
    <ThemeProvider theme={colors}>
      <div className="App">{children}</div>
      <Global />
    </ThemeProvider>
  );
}

export default App;
