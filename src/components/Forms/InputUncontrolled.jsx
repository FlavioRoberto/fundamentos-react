
import { useState } from "react";

const Input = _ => {
    const [value] = useState('Initial');

    return <div>
        <input value={value} readOnly />
        <h2>{value}</h2>
    </div>
}

export default Input;