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
      fontSize: "3rem",
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
        fontSize: "4rem",
      },  
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,
   
      fontSize: "3rem",
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
        fontSize: "2rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "2.9rem",
      },
    },
    h3: {
       fontFamily: "Roboto, sans-serif",
    
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
        fontSize: "1.8rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.9rem",
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
        fontSize: "1.7rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "2.1rem",
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
        fontSize: "3rem",
      },
    },
   
    body1: {
      color:"rgb(12, 12, 12)",
      fontFamily: "Inter, sans-serif",
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
    body2: {color:"rgb(12, 12, 12)",
      fontFamily: "Inter, sans-serif",
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
      },},
 
    button: {
      fontWeight:400,
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      fontFamily:"Roboto, sans-serif"
    },

      
 
  },

});

export default theme;
