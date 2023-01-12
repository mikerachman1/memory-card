import React from "react";
import Scores from "./Scores";

const Header = (props) => {
  return (
    <header>
      <h1>Don't Click the Same Card Twice!</h1>
      <Scores current={props.current} high={props.high} />
    </header>
  );
};

export default Header;