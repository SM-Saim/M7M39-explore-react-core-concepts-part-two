import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const setValue = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const reduceValue = () => {
    const reduceCount = count - 1;
    setCount(reduceCount);
  };
  return (
    <div
      style={{
        border: "2px solid orange",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Counter:{count}</h3>
      <button onClick={setValue}>Add</button>
      <button onClick={reduceValue}>Reduce</button>
    </div>
  );
}
