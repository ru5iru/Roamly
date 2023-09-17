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

  const messageDate = message.date.toDate();
  const formattedDateTime = messageDate.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });


  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.email ? "owner" : "other"} `} >
      
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
        <div className="messageInfo">
        <span className="messageTime">{formattedDateTime}</span> {/* Display the formatted date and time */}
      </div>
      </div>
      
    </div>
  )
}

export default Message
