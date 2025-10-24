import React , { useState, useEffect } from "react"

function TimerApp(){
    const [seconds,setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            },1000);
            console.log("Timer Started");
        }else{
            console.log("Timer Stopped");
        }
        return(() => {
            clearInterval(interval);
            console.log("Timer Cleared");
        })
    },[isRunning]);
    const handleStartPause = () => setIsRunning((prev) => !prev);
    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    return(
        <div>
            <h2>Clock Timer</h2>
            <h3>{seconds}</h3>
            <button onClick={handleStartPause}>{isRunning ? "Pause":"Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TimerApp;