import React from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Hook = () => {

    const [name, setName] = useLocalStorage('username', "")
    const [id, setID] = useLocalStorage('userid', "")

    return <div>
        <input type="text" 
        placeholder="Enter Your Name"
        value = {name} 
        onChange={(e) => setName(e.target.value)} 
        />

        <h2>Hello, {name} !</h2>

        <input type="text" 
        placeholder="Enter Your ID"
        value = {id} 
        onChange={(e) => setID(e.target.value)} 
        />

        <h2>Your ID : {id}</h2>

    </div>

}

export default Hook; 