import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
// const darkTheme = createTheme({
//   palette: {
//     mode: "#de433e",
//   },
// });
ReactDOM.render(
  // <ThemeProvider theme={darkTheme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ThemeProvider>
  document.getElementById("root")
);
