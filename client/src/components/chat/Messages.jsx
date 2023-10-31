import React, { useContext, useEffect, useState } from 'react'
import Message from './Message' 
import './messenger.scss'
import { ChatContext } from '../../context/ChatContext'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../../src/firebase'
import { AuthContext } from '../../context/authContext'
import Input from './Input'

const Messages = () => {
    const [ messages, setMessages] = useState([])
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    console.log("from messages: "+data.chatId)


    const handleUnreadMessages=async(chatId)=>{
       await updateDoc(doc(db, 'userChats', currentUser.email), {
        [chatId + '.unreadmessages']: 'false'
        
      })
    }

  useEffect(()=>{  
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages) && handleUnreadMessages(data.chatId);

      
      
    });

    return () => {
      unSub();
    };
  }, [data.chatId,currentUser.email]);

    const ar = data.chatId.split('@');
    const first = ar[0];
    const second = ar[1];

    const chatId2 = second + '@' + first;


  useEffect(()=>{  
    const unSub = onSnapshot(doc(db, "chats", chatId2), (doc) => {
      doc.exists() && setMessages(doc.data().messages) &&  handleUnreadMessages(chatId2);

     
    });

    return () => {
      unSub();
    };
  }, [chatId2,currentUser.email]);
  


  console.log(messages)
  
  return (
    // <div>
    <div className='messages'>
      {messages.map(m=>(

        <Message message={m} key={m.id}/>
      ))}
      
    </div>
    ///* </div> */
  )
}

export default Messages
