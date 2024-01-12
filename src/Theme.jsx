import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3C9990",
    },
    secondary: {
      main: "#B5C2C7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
