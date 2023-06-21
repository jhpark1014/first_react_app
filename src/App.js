// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :)");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn(); // byeFn()을 쓰지 않는다
  }
  useEffect(hiFn, []);

  // useEffect(() => {
  //   console.log("created :)");
  //   // return () => console.log("destroyed :(");
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
