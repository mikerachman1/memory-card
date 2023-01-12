import React from "react";
import Scores from "./Scores";

const Header = (props) => {
  return (
    <header>
      <h1>Don't Click the Same Flag Twice!</h1>
      <button onClick={props.toggleNames}>Display Country Names</button>
      <Scores current={props.current} high={props.high}/>
    </header>
  );
};

export default Header;