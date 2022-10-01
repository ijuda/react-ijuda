import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[800],
      dark: orange[900],
      light: orange[500],
      contrastText: "#FFF",
    },
  },
  typography: {
    fontSize: 20,
  },
});
