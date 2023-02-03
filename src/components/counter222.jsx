import { useState } from "react";
import Bound2 from "./bound2";
import Sizes from "./sizes";

const Counter2 = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 0,
  steps = 1,
  color = "blue",
}) => {
  const [counter, setCounter] = useState(initial);

  const isNotAtMax = counter + steps <= max;
  const isNotAtMin = counter - steps >= min;

  const handleClick = (e) => {
    const typeBtn = e.target.innerHTML;
    if (typeBtn === "+") {
      isNotAtMax && setCounter((oldVal) => oldVal + steps);
    }
    if (typeBtn === "-") {
      isNotAtMin && setCounter((oldVal) => oldVal - steps);
    }
    if (typeBtn === "reset") {
      setCounter(initial);
    }
  };
  const counterStyle = {
    display: "flex",
    justifyContent: "left",
    gap: 5,
    backgroundColor: `${color}`,
    width: "50vw",
    padding: 8,
    borderRadius: 11,
  };

  return (
    <>
      <div style={counterStyle}>
        <button disabled={!isNotAtMax} onClick={handleClick}>
          +
        </button>
        <span>{counter}</span>
        <button disabled={!isNotAtMin} onClick={handleClick}>
          -
        </button>
        <button onClick={handleClick}>reset</button>
        <Bound2 counter={counter} />
        <Sizes num={counter} />
      </div>
    </>
  );
};

export default Counter2;
