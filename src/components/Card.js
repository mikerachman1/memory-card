import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.name}/>
    </div>
  );
};

export default Card;