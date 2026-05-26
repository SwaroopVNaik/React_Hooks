import React from "react";
import { use } from "react";
import { useState } from "react";


// Simple Example on Use_State Single Variable !

let Use_State = () => {

    const [model, setModel] = useState("RS457")

    const changeModel = () => {
        setModel("Interceptor 650")
    }


    return <div>

        <h1>My favourite Bike is Aprillia {model} ! </h1>
        <button onClick={changeModel}>Click This !</button>

    </div>

}

export default Use_State;