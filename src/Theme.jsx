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
      main: "#09A5B0",
    },
    secondary: {
      main: "#000808ff",
      white: "#FFFFF8",
    },
    bg: {
      dark: "#022932",
      main: "#DFFFF9",
      darkBlue: "#022932",
      mediumBlue: "#09A5B0",
      mediumLightBlue: "#7AE7F5",
      semiLightBlue: "#8EFFFE",
      lightBlue: "#A4FFFE",
      whiteBlue: "#DBFFFE",
    },
    border: {
      main: "#BAE3D7",
      dark: "#B5C2C7",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    color: "#09A5B0",
    h1: {
      fontWeight: "bold",
      fontSize: "2.4rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontSize: "1.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.6rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3.4rem",
      },
    },
    h3: {
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
      fontSize: "1.2rem",
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
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "0.9rem",
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
        fontSize: "1.1rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.1rem",
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
    pCarrousel: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3rem",
      },
    },
    autor: {
      fontSize: "0.6rem",
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
    body: {
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
    button: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
