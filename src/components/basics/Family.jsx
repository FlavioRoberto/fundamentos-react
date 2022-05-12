import React from "react";
import FamilyMember from "./FamilyMember";

const Family = (props) => {
  return (
    <div>
      <FamilyMember name="Goku" {...props} />
      <FamilyMember name="Gohan" {...props} />
      <FamilyMember name="Goten" {...props} />
    </div>
  );
};

export default Family;
