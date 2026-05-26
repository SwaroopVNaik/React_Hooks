import React from "react";
import { useState } from "react";

// Simple Example on Use_State Multiple Variable !

let Use_state_Multi = () => {

    const [Company, setCompany] = useState({
        Brand : "Tech Loka", 
        color : "Cyan", 
        model : "Tech", 
        year  : "2026"
    });

    const ChangeDetails = () => {

        setCompany((prev) => {
            return {...prev, color : "White", Brand : "Aprillia", model : "Racing Sport", year : 2030}
        })
        
    }
    
    return <div>

        <h1>My {Company.Brand}</h1>
        <h2>It is a {Company.color} {Company.model} form {Company.year} </h2>
        <button onClick={ChangeDetails}>Click Me !</button>

    </div>

}

export default Use_state_Multi;