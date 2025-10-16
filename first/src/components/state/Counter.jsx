import React from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const incrementCount = () => {
        setCount(count + 1);
    }; 

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return(
        <div>
            <h2>Counter</h2>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default Counter;