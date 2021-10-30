import css from './Stopwatch.module.css';
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTimer(0);
  };

  const handlePause = () => {};

  const handleReset = () => {};

  return (
    <div className="app">
      <div className="app">
        <h3>React Stopwatch</h3>
        <div className="stopwatch-card">
          <p>{timer}</p>
          <div className="buttons">
            {isActive ? (
              <button onClick={handleStop}>Stop</button>
            ) : (
              <button onClick={handleStart}>Start</button>
            )}
            <button onClick={handlePause}>Wait</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
