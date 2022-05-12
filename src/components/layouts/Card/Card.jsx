import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, color } = props;

  const cardStyle = {
    backgroundColor: color,
    borderColor: color,
  };

  return (
    <div className="card" style={cardStyle}>
      <span className="title">{title}</span>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
