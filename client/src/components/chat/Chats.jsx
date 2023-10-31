import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import {db} from '../../../src/firebase'
import { ChatContext } from '../../context/ChatContext';
import chatemoji from '../../../src/assets/newmsg.png'
// import Chat from './Chat';

export default function Chats() {

  const [chats,setChats] = useState([])
  const { data } = useContext(ChatContext);

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


const handleSelect = async(u,chatId) => {

  await updateDoc(doc(db, 'userChats', currentUser.email), {
    [chatId + '.unreadmessages']:'false',
    
  });
  dispatch({ type: "CHANGE_USER", payload: u.userInfo });
};



  // console.log(chats)
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>  (  

        <div className="userchat" key={chat[0]} onClick={()=>handleSelect(chat[1],chat[0]/*.userInfo,chat[1].unreadmessages*/)}>
          <img src={chat[1].userInfo?.profile_pic} alt="" />
          <div className="userchatInfo">
            <span className='userbar'>{chat[1].userInfo?.firstname} {chat[1].userInfo?.lastname}</span>
            {chat[1].unreadmessages === true && <span><img className='unreadmsg' src={chatemoji} alt="" /></span>}
            {chat[1].unreadmessages === true && <p style={{ color:'#8da4f1' ,width: '300px'}}><strong>{chat[1].lastMessage?.text}</strong></p> || <p>{chat[1].lastMessage?.text}</p>}
   
          </div>
        </div>
      ))}

      </div>
  )
} 
