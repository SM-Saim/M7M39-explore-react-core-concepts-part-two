import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Click in On");
  }
  const handleClick2 = () => {
    alert("Click number 2");
  };

  const handlerWithPara = (number) => {
    alert(number + 10);
  };
  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClick2}>Click Here 2</button>
      <button
        onClick={() => {
          alert("Click Here 3");
        }}
      >
        Click Here 3
      </button>
      {/* vejailla onClick */}
      <button onClick={() => handlerWithPara(5)}> Click 4</button>
    </>
  );
}

export default App;
