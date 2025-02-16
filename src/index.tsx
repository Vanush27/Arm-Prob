import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "../src/assets/global.css";
import { BrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />

      {/* <Route element={<AuthLayout />}> */}
      <Route path="login" element={<LoginScreen />} />
      {/* <Route path="register" element={<Register />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  // </Provider>
);

reportWebVitals();
