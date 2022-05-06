import React from "react";

export default function WithParameter(props) {
  const { title, subtitle } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
}
