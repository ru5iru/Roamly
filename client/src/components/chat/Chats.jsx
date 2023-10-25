import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import {db} from '../../../src/firebase'
import { ChatContext } from '../../context/ChatContext';
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

//   const handleSelect = (u) => {
    
//     const { userId, chatId } = currentUser; // Adjust this to fetch the correct user and chat IDs
//     const userChatsRef = doc(db, 'userChats', userId)
//     console.log("======================================================================================================");
//     console.log(u);
//     // const chatId = u.chatId;

//     const updateObject = {};
//     updateObject[`${chatId}.${u.chatId}.unreadmessages`] = false;
  
//     updateDoc(userChatsRef, updateObject).then(() => {
//       console.log('Unread messages updated successfully');
//     }).catch((error) => {
//       console.error('Error updating unread messages:', error);
//     });
//     dispatch({ type: "CHANGE_USER", payload: u.userInfo });
// };


const handleReadMessages= async(chatId)=>{
//  if 

}



const handleSelect = async(u,chatId) => {

  await updateDoc(doc(db, 'userChats', currentUser.email), {
    [chatId + '.unreadmessages']:'false',
    
   
  });
  console.log("CHATID: "+ chatId)
  // handleReadMessages(chatId);
  dispatch({ type: "CHANGE_USER", payload: u.userInfo });
};



  // console.log(chats)
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>  (  

        <div className="userchat" key={chat[0]} onClick={()=>handleSelect(chat[1],chat[0]/*.userInfo,chat[1].unreadmessages*/)}>
          <img src={chat[1].userInfo?.profile_pic} alt="" />
          <div className="userchatInfo">
            <span>{chat[1].userInfo?.firstname} {chat[1].userInfo?.lastname}</span>
            <span className='unreadmessages'>1</span>
            <p>{chat[1].lastMessage?.text}</p>
            
            {/* {chat[1].unreadMessages > 0 && <span>({chat[1].unreadMessages})</span>} */}
          </div>
        </div>
      ))}

      </div>
  )
} 
