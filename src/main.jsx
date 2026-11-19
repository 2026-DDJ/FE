import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";
import MobileResponsiveStyle from "./styles/MobileResponsiveStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <MobileResponsiveStyle />
      <App />
    </BrowserRouter>
  </StrictMode>
);