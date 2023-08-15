// ChatBox.js
import React, { useState } from 'react';
import './chatbox.scss';

const ChatBox = ({ chat }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const updatedChat = {
      ...chat,
      messages: [
        ...chat.messages,
        { text: newMessage, sender: 'user' },
      ],
    };

    // Update the chat's messages
    // You might want to implement a way to update your chat data

    setNewMessage('');
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
      {/* <img src={"https://static.vecteezy.com/system/resources/previews/009/378/164/non_2x/arrow-icon-arrows-sign-black-arrows-free-png.png"} alt="chatlist" className='menu'/> */}
        <img src={chat.profilePicture} alt={chat.name} className='propic'/>
        <span className=''>{chat.name}</span>
        {/* <img src={"https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/call-up.png"} alt={chat.name} className='call'/> */}
       
      </div>
      <div className="message-list">
        {chat.messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'other-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      {/* <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
      <div className="message-input">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"} alt="emoji" className="emoji-picture" />
        <input type="text" placeholder="Type your message..." />
        <img src={"https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/right-arrow-37.png"} alt="send" className="button" />
      </div>
    </div>
  );
};

export default ChatBox;