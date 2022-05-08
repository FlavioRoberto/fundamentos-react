function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Random = (props) => {
  const { min, max } = props;
  const randomNumber = getRandomInt(min, max);
  return <h2>{randomNumber}</h2>;
};

export default Random;
