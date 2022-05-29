import { getRandomInt } from '../../services/number.service';

const Random = (props) => {
  const { min, max } = props;
  const randomNumber = getRandomInt(min, max);
  return <h2>{randomNumber}</h2>;
};

export default Random;
