// import Button from "./Button";
// import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CoinTracker from "./CoinTracker.js";
import Movie from "./components/Movie.js";
import { useState, useEffect } from "react";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
