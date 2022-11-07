import { useState } from "react";
import Boundaries from "./boundaries";

const Counter = ({
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    initial = 0,
    steps = 5,
}) => {
    const [counter, setCounter] = useState(initial);
    const add = () => setCounter(currentValue => currentValue + steps);
    const substruct = () => setCounter(currentValue => currentValue - steps);

    if (counter > max || counter < min) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: 60, color: 'red' }}>no more steps⛔
                <button disabled={true}><i className="bi bi-plus-square-fill"></i></button>
                <button disabled={true}><i className="bi bi-patch-minus-fill"></i></button>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 60 }}>
            <button onClick={add}><i className="bi bi-plus-square-fill"></i></button>
            <button onClick={substruct}><i className="bi bi-patch-minus-fill"></i></button>
            <span>{counter}</span>
            <Boundaries counter={counter}></Boundaries>
        </div>
    )
}

export default Counter;