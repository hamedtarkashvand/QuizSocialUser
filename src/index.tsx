import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorModeContextProvider from "./context/themContext";
import LanguageContextProvider from "./context/languageContext";
import { Provider } from 'react-redux'
import store from './Redux/store'

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
    <ColorModeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ColorModeContextProvider>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
