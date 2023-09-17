import React, { useContext, useEffect, useRef } from 'react'
import './messenger.scss'
import { AuthContext } from '../../context/authContext'
import { ChatContext } from '../../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} =useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message])

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.email ? "owner" : "other"} `} >
      <div className="messageInfo">
        <span>{message.Date}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
      
    </div>
  )
}

export default Message
