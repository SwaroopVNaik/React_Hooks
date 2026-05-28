import React, { useContext } from 'react'
import ContextProvider, { AppContext } from '../React_Hooks/useContext/AppContext'

const Footer = () => {

  const {PhoneNumber, name} = useContext(AppContext)

  return (
    <div>
        <h1>Footer</h1>
        <h3>Phone : {PhoneNumber} </h3>
        <h4>Name : {name}</h4>
    </div>
  )
}

export default Footer;
