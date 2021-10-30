// import css from './Stopwatch.module.css';
import React, { useState, useRef } from 'react';

function Stopwatch() {
  return (
    <div className="app">
      <div className="app">
        <h3>React Stopwatch</h3>
        <div className="stopwatch-card">
          {/* <p>{timer}</p> */}
          <div className="buttons">
            {/* {isActive ? (
              <button onClick={handleStop}>Stop</button>
            ) : (
              <button onClick={handleStart}>Start</button>
            )}
            <button onClick={handleWait}>Wait</button>
            <button onClick={handleReset}>Reset</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
