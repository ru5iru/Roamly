import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import { doc, onSnapshot } from 'firebase/firestore'
import {db} from '../../../src/firebase'
// import Chat from './Chat';

export default function Chats() {

  const [chats,setChats] = useState([])

  const { currentUser } = useContext(AuthContext)

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.email), (doc)=>{
        setChats(doc.data());
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.email && getChats();
  },[currentUser.email]);

  console.log(Object.entries)
  
  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (  
        <div className="userchat" key={chat[0]}>
          <img src={chat[1].userInfo?.profile_pic} alt="" />
          <div className="userchatInfo">
            <span>{chat[1].userInfo?.firstname} {chat[1].userInfo?.lastname}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}

      </div>
  )
} 
