import React from "react";
import "./card.scss";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img.large} alt={props.name} />
      <h5>{props.name}</h5>
    </div>
  );
};

export default Card;
