import React, { useState } from "react";
import "./style.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if (e.target.innerHTML === "Decrease") {
      setCount(count - 1);
    } else if (e.target.innerHTML === "Reset") {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="container text-center shadow mt-3 p-3">
        <h1 className="display-1">Counter</h1>
        <h2
          className={`display-1 ${count > 0 ? "text-success" : "text-danger"} ${
            count == 0 && "yellow"
          } `}
        >
          {count}
        </h2>
        <button onClick={handleClick} className="btn btn-danger mx-2">
          Decrease
        </button>
        <button onClick={handleClick} className="btn btn-warning mx-2">
          Reset
        </button>
        <button onClick={handleClick} className="btn btn-success mx-2">
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
