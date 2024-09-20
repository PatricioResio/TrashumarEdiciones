import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#215E61",
      dark: "#0C2324",
    },
    secondary: {
      main: "#B5C2C7",
      white: "#BAE3D7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
