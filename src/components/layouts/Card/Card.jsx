import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title } = props;
  return (
    <div className="card">
      <span className="title">{title}</span>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
