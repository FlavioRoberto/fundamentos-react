import React from "react";
import students from "../../data/students";

const StudentsLists = () => {
  const liStudents = students.map((student) => (
    <li key={student.id}>
      {student.id}) {student.name} - {student.classification}
    </li>
  ));

  return (
    <div>
      <ul>{liStudents}</ul>
    </div>
  );
};

export default StudentsLists;
