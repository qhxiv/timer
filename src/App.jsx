import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="timer">
        <span className="timer__hour">0 hours</span>
        <span className="timer__minute">0 mins</span>
        <span className="timer__second">0 secs</span>
      </div>

      <div className="control">
        <button className="control__start">Start</button>
        <button className="control__pause">Pause</button>
        <button className="control__reset">Reset</button>
      </div>
    </div>
  );
}

export default App