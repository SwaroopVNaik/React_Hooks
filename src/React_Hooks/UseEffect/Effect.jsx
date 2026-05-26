import React, { useEffect, useState } from "react";

const Effect = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count + 1);
        }, 2000)
    }, [count])

    // Second option => Whenever we use an Empty array(dependany) in Useeffect after callback, [] it will run the function only once and stops. 

    // Third Option => When we add count in the dependancy [count], whenever the count changes, the dependancy again runs the call back function

    // we can add multiple varibales in the dependancy too 

    return <div>
        <h1>I've Rendered {count} times !</h1>
    </div>

}

export default Effect;