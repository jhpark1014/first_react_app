// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json.minimum_rating=8.5&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  const [usd, setUsd] = useState(0);
  const onChange = (event) => {
    setUsd(event.target.value);
  };

  const [chosencoin, setChosenCoin] = useState(0);
  const onSelect = (event) => {
    setChosenCoin(event.target.value);
    console.log(event.target.value);
  };

  return <div>{loading ? <h1>Loading ...</h1> : null}</div>;
}

export default MovieApp;
