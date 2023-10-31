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

  if (!message || !message.date) {
  
}


  return (
    <div className={`message ${message.senderId === currentUser.email ? "owner" : "other"}`}>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && message.img.includes('.pdf') ? (
          <div className="pdf-container">
            <iframe src={message.application} width="100%" height="500px"></iframe>
            {/* <a href="https://firebasestorage.googleapis.com/v0/b/messenger-70aff.appspot.com/o/images%2Fc51744b1-19dd-4ea1-ab6d-f2fa860c1e55?alt=media&token=10040134-737c-44ab-9b89-3ebc62ea6861&_gl=1*12r76yv*_ga*MTE3Mzg3NzI5LjE2OTUxNDEyODY.*_ga_CW55HF8NVT*MTY5ODY4MjcyOC42NS4xLjE2OTg2ODM2NzQuNjAuMC4w"></a> */}
          </div>
        ) : (
          message.img && <img src={message.img} alt="" />
        )}
        <div className="messageInfo">
          <span className="messageTime">{formattedDateTime}</span>
        </div>
      </div>
    </div>
  );
  
}

export default Message
