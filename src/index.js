import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> // 이게 있으면 자손까지 검사해 두 번 실행 됨 -> rendering이 두 번 됨!
  <App />
  // </React.StrictMode>
);
