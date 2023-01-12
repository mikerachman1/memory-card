import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <img src={props.src} alt={props.name}/>
      {props.displayNames &&
        <h2>{props.name}</h2>
      }
    </div>
  );
};

export default Card;