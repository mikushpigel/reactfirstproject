import { useState } from "react";
import Counter2 from "./counter222";

const Inputs22 = () => {
  const [inputs, setInput] = useState({
    min: "",
    max: "",
    steps: "",
    initial: "",
    color: "",
  });
  const [isChecked, setCheck] = useState("");
  const [inputList, setList] = useState([]);

  const divStyle = (color) => {
    return {
      display: "flex",
      flexDirection: "column",
      width: 150,
      backgroundColor: `${color}`,
      padding: 20,
      borderRadius: 10,
    };
  };
  const { min, max, steps, initial, color } = inputs;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCheck("");
    setInput({ ...inputs, [name]: value });
  };
  const handleClick = () => {
    if (min && max && steps && initial && color) {
      setList([
        ...inputList,
        {
          min: Number(min),
          max: Number(max),
          initial: Number(initial),
          steps: Number(steps),
          color: color,
        },
      ]);
      setInput({ min: "", max: "", initial: "", steps: "", color: "" });
    } else {
      setCheck("please fill all fields");
    }
  };
  return (
    <>
      <div style={divStyle("skyblue")}>
        <label htmlFor="min">min</label>
        <input onChange={handleChange} type="text" name="min" value={min} />

        <label htmlFor="max">max</label>
        <input onChange={handleChange} type="text" name="max" value={max} />

        <label htmlFor="steps">steps</label>
        <input onChange={handleChange} type="text" name="steps" value={steps} />

        <label htmlFor="initial">initial</label>
        <input
          onChange={handleChange}
          type="text"
          name="initial"
          value={initial}
        />

        <label htmlFor="steps">color</label>
        <input onChange={handleChange} type="text" name="color" value={color} />

        <button onClick={handleClick}>submit</button>
        <span>{isChecked}</span>
      </div>
      {inputList.map(({ min, max, initial, steps, color }, index) => (
        <Counter2
          key={index}
          min={min}
          max={max}
          initial={initial}
          steps={steps}
          color={color}
        />
      ))}
    </>
  );
};

export default Inputs22;
