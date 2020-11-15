import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { Provider as AlertProvider } from "react-alert";
import { positions, transitions, types } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE_RIGHT,
  timeout: 1500,
  // you can also just use 'scale'
  transition: transitions.FADE,
};

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
