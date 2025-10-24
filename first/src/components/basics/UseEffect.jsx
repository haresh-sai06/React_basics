import React, { useState, useEffect, use } from "react"

function FunctionVersion(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Mounted");
        const timer = setInterval(() => {
            setCount((c) => c+1)
        },1000);

        return() => {
            console.log("Component Unmounted");
            clearInterval(timer)
    }
    },[]);

    useEffect(() => {
        if(count>0){
            console.log("Component Updated " + {count});
        }
    },[count]);

    return(
        <div>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default FunctionVersion;