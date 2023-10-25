import React, { useContext, useState } from 'react'
import './messenger.scss'
import cam from '../../assets/images/camera.png'
import add from '../../assets/images/add.png'
import more from '../../assets/images/more.png'
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../../context/ChatContext'
// import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthContext } from '../../context/authContext'

const Chat = () => {
  // const {user} = useState("null")
  const {data} = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  
  // console.log(data.chatId)

  // const [isDeleteChatVisible, setIsDeleteChatVisible] = useState(false);

  // const handleDeleteChat =async () => {

  //   const chatDocRef = doc(db, 'chats', data.chatId);
  //   const chatDocSnap = await getDoc(chatDocRef);

  //   const ar = data.chatId.split('@');
  //   const first = ar[0];
  //   const second = ar[1];
  //   const chatId2 = second + '@' + first;

  //   const chatDocRef2 = doc(db, 'chats', chatId2);
  //   const chatDocSnap2 = await getDoc(chatDocRef2);

  //   console.log(chatDocSnap.exists())
  //   console.log(chatDocSnap2.exists())


  //   if(chatDocSnap.exists()){
  //     await updateDoc(chatDocRef, {
  //       messages: arrayUnion({
  //         deleteid: currentUser.email,
  //       }),
  //     });
  //   }else{
  //     await updateDoc(chatDocRef2, {
  //       messages: arrayUnion({
  //         deleteid: currentUser.email,
  //       }),
  //     });
  //   }


  //   setIsDeleteChatVisible(false);
  //   // After successful deletion, you can navigate the user back to the chat list or perform other actions as needed
  // };
  return (
    <div className='chat'>
      <div className="chatInfo">
        {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/272/610/desktop-wallpaper-anime-girl-profile-thumbnail.jpg" alt="none" />
        <div className="userchatInfo"> */}
          <span>{data.user?.firstname} {data.user?.lastname}</span>
          <div className="chatIcons">
            {/* <img src={cam} alt="" />
            <img src={add} alt="" /> */}
            <img src={more} alt="" /*onClick={() => setIsDeleteChatVisible(!isDeleteChatVisible)}*//>


            {/* {isDeleteChatVisible && (
            <button onClick={handleDeleteChat} className="deleteChatButton">
              Delete Chat
            </button>
          )} */}
          </div>
          
        </div>

        <Messages />
        
        
        <Input /> 

      </div>
    // </div>
  )
};

export default Chat;