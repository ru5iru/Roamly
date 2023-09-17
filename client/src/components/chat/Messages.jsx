import React, { useContext, useEffect, useState } from 'react'
import Message from './Message' 
import './messenger.scss'
import { ChatContext } from '../../context/ChatContext'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../src/firebase'

const Messages = () => {
    const [ messages, setMessages] = useState([])
    const { data } = useContext(ChatContext);

    console.log("from messages: "+data.chatId)

  useEffect(()=>{  
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

    const ar = data.chatId.split('@');
    const first = ar[0];
    const second = ar[1];

    const chatId2 = second + '@' + first;


  useEffect(()=>{  
    const unSub = onSnapshot(doc(db, "chats", chatId2), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      
    });

    return () => {
      unSub();
    };
  }, [chatId2]);
  


  console.log(messages)
  
  return (
    <div className='messages'>
      {messages.map(m=>(
        <Message message={m} key={m.id}/>
      ))}
      
    </div>
  )
}

export default Messages

// import React from 'react'
// import Message from './Message' 
// import './messenger.scss'

// const Messages = () => {
//   return (
//     <div className='messages'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message /> 
      
//     </div>
//   )
// }

// export default Messages