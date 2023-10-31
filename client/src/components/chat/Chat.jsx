import React, { useContext, useState } from 'react'
import './messenger.scss'
import cam from '../../assets/images/camera.png'
import add from '../../assets/images/add.png'
import more from '../../assets/images/more.png'
import logo from '../../assets/images/logowb.png'
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../../context/ChatContext'
// import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthContext } from '../../context/authContext'
import { doc, updateDoc } from 'firebase/firestore'

const Chat = () => {
  // let user=null;
  // <img src="" alt="" />
  // const {user} = useState("null")
  const {data} = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  console.log("chat data :"+data.user)

// user=data.user;
  // if (!data.user) {
  //   return null;
  // }

  return (
    <div className="chat">
      <div className="chatInfo">
        {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/272/610/desktop-wallpaper-anime-girl-profile-thumbnail.jpg" alt="none" /> */}
        <div className="userchatInfo">
          <span>{data.user?.firstname} {data.user?.lastname}</span>
          <div className="chatIcons">
            {/* Your chat icons */}
          </div>
        </div>
      </div>
  
      {data.user ? (
        <React.Fragment>
          <Messages />
          <Input />
        </React.Fragment>
      ) : (
        <div> {/* You can replace this with any component you want to render when data.user is not defined */} </div>
      )}
    </div>
  );
  
      }
  
export default Chat;