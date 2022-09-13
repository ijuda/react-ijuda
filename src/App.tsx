import { ThemeProvider } from "styled-components";
import Button from "./components/ui/Atom/Button";
import colors from "./styles/colors/colors";
import Global from "./styles/global.styles";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Button>Trabalhe Conosco</Button>
      <Global />
    </ThemeProvider>
  );
}

export default App;
