import React, { useContext } from 'react'
import './messenger.scss'
import cam from '../../assets/images/camera.png'
import add from '../../assets/images/add.png'
import more from '../../assets/images/more.png'
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../../context/ChatContext'

export default function Chat() {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/272/610/desktop-wallpaper-anime-girl-profile-thumbnail.jpg" alt="none" />
        <div className="userchatInfo"> */}
          <span>{data.firstname} {data.lastname}</span>
          <div className="chatIcons">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />

          </div>
          
        </div>

        <Messages />
        
        
        <Input /> 

      </div>
    // </div>
  )
}
