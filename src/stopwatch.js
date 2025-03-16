import React from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
      </h2>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Stopwatch;
