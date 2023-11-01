import React, { useContext, useEffect, useState } from 'react'
import './messenger.scss'
import { AuthContext } from "../../context/authContext";
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import {db} from '../../../src/firebase'
import { ChatContext } from '../../context/ChatContext';
import chatemoji from '../../../src/assets/newmsg.png'
import axios from 'axios';
// import Chat from './Chat';

export default function Chats() {

  const [chats, setChats] = useState([]);
  const [profilePics, setProfilePics] = useState({});
  const [profileData, setProfileData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const user_id= 69690;

  const getPosts = async (user_id) => {
    
    try {
        const response = await axios.get('/users/profile/' + user_id);
        const jsonData = response.data;
        setProfileData(jsonData);
        console.log(jsonData);
    } catch (error) {
        console.error(error.message);
    }
};


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


  const handleSelect = async (u, chatId) => {
    const userEmail = u.userInfo.email; // Assuming u.userInfo.email is the email of the user
    try {
      // const response = await axios.get(`http://localhost:8000/server/users/profile-pic/${userEmail}`);

      // const profilePic = response.data.profile_pic; // Assuming the response contains the profile_pic field
  
      // Use the fetched profile picture in any way you need
      // console.log("Profile Picture:", profilePic);
      getPosts(user_id);
      console.log("hi")
    } catch (error) {
      console.error(error);
    }

    console.log("hi")
    getPosts();
  
    await updateDoc(doc(db, 'userChats', currentUser.email), {
      [chatId + '.unreadmessages']: 'false',
    });
    dispatch({ type: "CHANGE_USER", payload: u.userInfo });
  };
  



  // console.log(chats)
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>  (  

        <div className="userchat" key={chat[0]} onClick={()=>handleSelect(chat[1],chat[0])}>
         {/* { console.log(chat[1].userInfo.email)} */}
          {/* <img src={currentUser.profile_pic} alt="" /> */}
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
