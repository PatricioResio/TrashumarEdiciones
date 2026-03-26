import * as React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Theme from "./Theme.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { HOME_HERO_LCP_URL } from "./constants/heroPreload";

if (typeof document !== "undefined") {
  const path = window.location?.pathname;
  if (path === "/" || path === "") {
    const already = document.querySelector('link[data-hero-lcp="1"]');
    if (!already) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = HOME_HERO_LCP_URL;
      link.setAttribute("fetchpriority", "high");
      link.setAttribute("data-hero-lcp", "1");
      document.head.appendChild(link);
    }
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
