import React from "react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme.js";
import App from "./App.js"
import i18n from "../translate/i18n.ts";

import './index.css';
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </I18nextProvider>
  </StrictMode>
);
