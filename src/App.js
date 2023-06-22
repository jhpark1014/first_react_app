// import Button from "./Button";
// import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CoinTracker from "./CoinTracker.js";
import Movie from "./components/Movie.js";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
        <Route
          path="/movie/:id" // : 뒤에 암거나 와도됨! 의 의미인듯? 보내는 parameter의 이름이 id
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
