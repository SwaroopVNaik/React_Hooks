import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const Red = () => {

    const initialState = {count : 0}

    const reducer = (state, action) => {
        switch(action.type){
            case 'Increase' : {
                return {count : state.count + 1}
            }
            case 'Decrease' : {
                return {count : state.count - 1}
            }
            case 'Input' : {
                return {count : action.payload}
            }
            default : {
                return state
            }
        }
        return {count : state.count + 1}
    }

    // declaring reducer function 👇 : where reducer (function)
    // and initialState where {count : 0 }
    // state => gives current state (value)
    // dispatch => gives updated state

    // here useReducer gives us a fucntion where we get the array [state and dispatch]

    const [state, dispatch] = useReducer(reducer, initialState)


    return <div>
        {/* displaying state data : {state.count}  
            For updating state we are using dispatch() */}
        <h1>{state.count}</h1>

        <button onClick={() => dispatch({type : 'Increase'})}> Increase </button>

        <button onClick={() => dispatch({type : 'Decrease'})}> Decrease </button>
        <br />
        <br />

        <input value={state.count}
        onChange={(e)=>dispatch({type : 'Input',payload : Number(e.target.value)})} 
        type="number" />

      </div>
}

export default Red;