import React, { useState } from "react";
import { useMemo } from "react";

const Memo = () => {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    let cubeNum = (num) => {

        console.log('Calculation done !');
        return Math.pow(num, 3)
        
    }

    const result = useMemo(()=>cubeNum(number),[number]);

    return <div>

        <button onClick={()=>{setNumber(number + 1)}}>Cube Value : {result}</button>
        <button onClick={()=>{setCounter(counter + 1)}}>Counter++</button>
        <h1>Counter : {counter}</h1>

    </div>
                                                                              
}

export default Memo;