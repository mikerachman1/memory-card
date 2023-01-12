import React, { useState } from "react";

const Scores = (props) => {
  

  return (
    <div className="score-container">
      <div className="current-container">
        <h2>Current Score: {props.current}</h2>
      </div>
      <div className="high-container">
        <h2>High Score: {props.high}</h2>
      </div>
    </div>
  );
}

export default Scores;