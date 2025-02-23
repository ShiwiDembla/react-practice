import React, { useState } from "react";
import "./counter.css";
export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <div className="button-div">
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
}
