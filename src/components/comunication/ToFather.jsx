const ToFather = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={e => props.onGetData('Hello there')}>Send</button>
    </div>
  );
};

export default ToFather;
