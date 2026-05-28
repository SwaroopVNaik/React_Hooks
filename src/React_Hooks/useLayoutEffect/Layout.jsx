import React, { useEffect, useLayoutEffect } from "react";


const Layout = () => {

    // The useEffect is called after rendring the UI elements
    useEffect(()=>{
        console.log("Message from useEffect");
    },[])

    // The useLayoutEffect is called before rendring the UI elements 
    useLayoutEffect(()=>{
        console.log("Message from useLayoutEffect");
    }, [])

    return <div>
        <h2>Test Message</h2>
        {Array(40000).fill('').map((item, index)=>(
            <li key={index}>{Math.pow(Math.random(), 10)}</li>))}
    </div>

}

export default Layout;