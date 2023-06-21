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

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    // set function에 value를 넣는게 아니라 function을 넣어도 된다
    setToDos((currentArray) => [toDo, ...currentArray]); // array 앞에 ... 붙이면 element들만 데리고와
    setToDo("");
    // You can never directly modify the state -> don't use toDo = ""
    console.log(toDos);
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {/* array.map(function) 은 array 안의 모든 element에 대해 function을 실행시켜줌*/}
      {/* function의 결과가 하나하나 array에 담겨서 return */}
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ToDoList;
