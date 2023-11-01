import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import {auth} from '../../../src/firebase'

export default function Navbar() {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className='navbarchat'>
      <div className="user">
        <img src={currentUser.profile_pic} alt="none" />
        <span>{currentUser.firstname} {currentUser.lastname}</span>
      </div>
    </div>
  )
}
