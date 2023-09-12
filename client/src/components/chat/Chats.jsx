import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import { doc, onSnapshot } from 'firebase/firestore'
import {db} from '../../../src/firebase'
import { ChatContext } from '../../context/ChatContext';
// import Chat from './Chat';

export default function Chats() {

  const [chats,setChats] = useState([])

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

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

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }
  console.log(chats)
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>  (  

        <div className="userchat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
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
