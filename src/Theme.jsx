import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#215E61",
      dark: "#0C2324",
    },
    secondary: {
      main: "#B5C2C7",
      white: "#BAE3D7",
    },
    bg: {
      dark: "#215E61",
      main: "#DFFFF9",
      mediumBlue: "#09A5B0",
      mediumLightBlue: "#6CCCD9",
      lightBlue: "#BDFFF9",
    },
    border: {
      dark: "#B5C2C7",
      main: "#3F7D92",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: "2.4rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "6rem",
      },
    },
    h2: {
      fontWeight: "bold",
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.8rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "5rem",
      },
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.4rem",
      "@media (min-width:600px)": {
        fontSize: "1.6rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "2.6rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontSize: "1.6rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.2rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "2.8rem",
      },
    },
    h5: {
      fontSize: "1.1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.6rem",
      },
    },
    h6: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.4rem",
      },
    },
    p: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.4rem",
      },
    },
    autor: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1rem",
      },
      fontWeight: 500,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

export default theme;
