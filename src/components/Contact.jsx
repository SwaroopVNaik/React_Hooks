import React, { useContext } from 'react'
import { AppContext } from '../React_Hooks/useContext/AppContext';

const Contact = () => {

  const {PhoneNumber, name} = useContext(AppContext)

  return (
    <div>
        <h1>Contact</h1>
        <h3>Phone : {PhoneNumber} </h3>
        <h3>Name : {name}</h3>
    </div>
  )
  
}

export default Contact;
