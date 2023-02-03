import { useState } from "react";
import Inputs22 from "./components/Inputs22";

const App = () => {
  const [color, setColor] = useState("red");
  console.log(color);

  const divColor = {
    backgroundColor: `${color}`,
    width: "50vw",
    height: 200,
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleClick = (e) => {
    const buttonName = e.target.innerHTML;
    setColor(buttonName);
  };

  return (
    <>
      <div style={divColor}>
        <h1>welcome!</h1>
      </div>
      <div>
        <button onClick={handleClick}>green</button>
        <button onClick={handleClick}>crimson</button>
        <button onClick={handleClick}>blue</button>
      </div>
      {/* <Input />
      <Counter max={21} steps={5} /> */}
      {/* <Counter2 max={21} steps={5} min={-5} /> */}
      <Inputs22 />
    </>
  );
};

export default App;
