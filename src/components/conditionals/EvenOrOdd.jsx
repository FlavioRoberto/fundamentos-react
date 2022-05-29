const EvenOrOdd = (props) => {
  const isPar = props.number % 2 === 0;
  return (
    <div>
      {props.number} is {isPar ? <span>Even</span> : <span>Odd</span>}
    </div>
  );
};

export default EvenOrOdd;
