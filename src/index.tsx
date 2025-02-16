import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "../src/assets/global.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <App />
  </BrowserRouter>
  // <Provider store={store}>
  // </Provider>
);

reportWebVitals();
