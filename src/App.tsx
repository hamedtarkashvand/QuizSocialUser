import * as React from "react";
import "./App.css";
import RoutesApp from "./routes";
import { ColorModeContext } from "./context/themContext";
import { LanguageContext } from "./context/languageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const them = React.useContext(ColorModeContext);
  const lan = React.useContext(LanguageContext);
 
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={lan.language === 'fa'}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={them.mode}
      />
      <RoutesApp />

    </div>
  );
}

export default App;
