import React from "react";
import { useState } from "react";

let Use_state_Multi2 = () => {

    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount(count => count + 1) // 1
        setCount(count => count + 1) // 2
        setCount(count => count + 1) // 3
        setCount(count => count + 1) // 4
    }

    return <div>
        <h1>Count : {count}</h1>
        <button onClick={IncreaseCount}>Increase !</button>
    </div>

}

export default Use_state_Multi2; 