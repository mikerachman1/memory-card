import React, { useState } from "react";

const Scores = () => {
  const [current, setCurrent] = useState(0);
  const [high, setHigh] = useState(0);

  return (
    <div className="score-container">
      <div className="current-container">
        <h2>Current Score: {current}</h2>
      </div>
      <div className="high-container">
        <h2>High Score: {high}</h2>
      </div>
    </div>
  );
}

export default Scores;