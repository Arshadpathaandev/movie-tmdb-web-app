import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Loader_Provider } from "./contextApp/LoaderContext.jsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <Loader_Provider>
          <App />
        </Loader_Provider>
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
