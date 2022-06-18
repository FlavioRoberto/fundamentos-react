const CounterForm = props => {
    return <div>
        <label>Increment by</label>
        <input onChange={e => props.setIncrementValue(Number(e.target.value))}></input>
    </div>
}

export default CounterForm;