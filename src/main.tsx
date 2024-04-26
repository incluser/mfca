import { ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next"
import i18n from "./i18next.ts"
import App from "./App.tsx";
import "./assets/globalStyles.css";
import { store } from "./store/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ChakraProvider>
        <React.StrictMode>
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </React.StrictMode>
      </ChakraProvider>
    </Provider>
  </I18nextProvider>
);
