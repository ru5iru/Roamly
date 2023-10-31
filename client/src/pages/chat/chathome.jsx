import React from 'react'
import "./chatHome.scss";
import Sidebar from '../../components/chat/Sidebar'
import Chat from '../../components/chat/Chat'
import ChatBox from '../../components/chat/ChatBox';

export default function Chathome() {
  return (
    <div className='chathome'> 
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
