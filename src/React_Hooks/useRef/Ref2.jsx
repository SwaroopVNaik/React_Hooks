import React from "react";
import { useRef } from "react";

// Accessing DOM Element Using UseRef

const Ref2 = () => {

    const inputElement = useRef();
    const buttonClicked = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = "Red"
        
    }

    return <div>
        <input type="text" ref = {inputElement}/>
        <button onClick={buttonClicked}>Click Here</button>
    </div>

}

export default Ref2;