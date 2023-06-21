// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // if default is null, no length -> 밑에 에러
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
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

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input
          type="number"
          value={usd}
          placeholder="How much USD?"
          onChange={onChange}
        ></input>{" "}
        US Dollars
      </div>
      <br></br>
      {loading ? (
        <strong>Loading ...</strong>
      ) : (
        <select onChange={onSelect}>
          <option>Choose an option</option>
          {coins.map((coin, id) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}: ${coin.quotes.USD.price} USD)
            </option>
          ))}
        </select>
      )}
      <div>You can buy {usd / chosencoin} coins.</div>
    </div>
  );
}

export default App;
