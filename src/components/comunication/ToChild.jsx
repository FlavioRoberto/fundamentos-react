import { useState } from 'react';
import ToFather from './ToFather';

const ToChild = () => {
  let [person, setPerson] = useState();

  const getData = (data) => {
    setPerson(data);
  };

  return (
    <div>
      <div>
        {person ? (
          <div>
            <span>Name: {person.name} </span>
            <span>Age: {person.age} </span>
          </div>
        ) : null}
      </div>
      <ToFather title='Get data from child' onGetData={getData} />
    </div>
  );
};

export default ToChild;
