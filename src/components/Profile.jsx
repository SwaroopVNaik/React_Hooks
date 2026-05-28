import React, { useContext } from 'react'
import { AppContext } from '../React_Hooks/useContext/AppContext';

const Profile = () => {

  const {name} = useContext(AppContext)

  return (
    <div>
        <h1>Profile</h1>
        <h3>Name : {name}</h3>
    </div>
  )
  
}

export default Profile;
