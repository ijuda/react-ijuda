import { ThemeProvider } from "styled-components";
import colors from "../../styles/colors/colors";
import Global from "../../styles/global.styles";
import Home from "../Home";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <div className="App">
        <Home />
      </div>
      <Global />
    </ThemeProvider>
  );
}

export default App;
