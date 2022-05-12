import React from "react";

const FamilyMember = (props) => {
  const { name, lastName } = props;

  return (
    <div>
      {lastName} {name}
    </div>
  );
};

export default FamilyMember;
