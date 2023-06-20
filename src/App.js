// import Button from "./Button";
// import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); // 버튼에 onClick eventListner로 설정
  const onChange = (event) => setKeyword(event.target.value); // input에 onChange eventListner로 설정
  // console.log("I run all the time");

  const runOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(runOnlyOnce, []);
  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]); // keyword가 바뀌면, 코드를 실행해!

  useEffect(() => {
    console.log("keyword or counter has changed");
  }, [keyword, counter]); // keyword 혹은 counter가 바뀌면, 코드를 실행해!

  // console.log("Search for", keyword);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here ..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
