import { useState } from "react";
import Bound2 from "./bound2";

const Counter2 = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 0,
  steps = 1,
  color = "blue",
}) => {
  const [counter, setCounter] = useState(initial);
  const [isdisable, setButton] = useState(false);

  const handleClick = (e) => {
    const typeBtn = e.target.innerHTML;
    if (typeBtn === "+") {
      setCounter((oldVal) => {
        if (oldVal + steps <= max) {
          return oldVal + steps;
        } else {
          setButton(true);
          return "this is the limit!";
        }
      });
    }
    if (typeBtn === "-") {
      setCounter((oldVal) => {
        if (oldVal - steps >= min) {
          return oldVal - steps;
        } else {
          setButton(true);
          return "no more steps for you!";
        }
      });
    }
    if (typeBtn === "reset") {
      setCounter(initial);
      setButton(false);
    }
  };
  const counterStyle = {
    display: "flex",
    justifyContent: "left",
    gap: 5,
    backgroundColor: `${color}`,
    width: "20vw",
    padding: 8,
    borderRadius: 11,
  };

  return (
    <>
      <div style={counterStyle}>
        <button disabled={isdisable} onClick={handleClick}>
          +
        </button>
        <span>{counter}</span>
        <button disabled={isdisable} onClick={handleClick}>
          -
        </button>
        <button onClick={handleClick}>reset</button>
        <Bound2 counter={counter} />
      </div>
    </>
  );
};

export default Counter2;
