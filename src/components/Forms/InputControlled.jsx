
import { useState } from "react";

const Input = _ => {
    const [value, setValue] = useState('Initial');

    const onChange = e => setValue(e.target.value)

    return <div>
        <input value={value} onChange={onChange} />
        <h2>{value}</h2>
    </div>
}

export default Input;