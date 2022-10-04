import { useState } from 'react';

export default function Counter(props) {
    let [count, setCount] = useState((props.defaultValue) ? props.defaultValue : 1)

    function incrementCount(incrementor) {
      setCount(count + incrementor)
    }

    return (
        <div className="counter">
            <p>{ count } Cat Clones</p>
            <button onClick={() => incrementCount(1)}>Clone a Cat</button>
            <button onClick={() => incrementCount(-1)}>Terminate a Cat</button>
        </div>
    )
}