const CounterButton = props => {
    return <>
        <button onClick={props.count}>+</button>
        <button onClick={props.unCount}>-</button>
    </>
};

export default CounterButton;