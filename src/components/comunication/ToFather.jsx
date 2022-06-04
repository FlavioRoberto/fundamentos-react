import { getRandomInt } from '../../services/number.service';

const ToFather = (props) => {
  const person = {
    name: 'Flávio',
    age: getRandomInt(18, 75),
  };
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={() => props.onGetData(person)}>Send</button>
    </div>
  );
};

export default ToFather;
