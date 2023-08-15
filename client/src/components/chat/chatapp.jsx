// ChatApp.js
import React, { useState, useEffect } from 'react';
import './chatapp.scss';
import Sidebar from './sidebar';
import ChatBox from './chatbox';

const sampleChats = [
  {
    id: 1,
    name: "Alice",
    profilePicture: "https://e7.pngegg.com/pngimages/737/196/png-clipart-woman-graphy-video-surprised-woman-girl-lip-thumbnail.png",
    lastMessage: 'Hello! How can I help you?',
    messages: [
      { text: "Hi!", sender: "user" },
      { text: "Hello! How can I help you?", sender: "other" },
    ],
},
        {     
        id: 2,
          name: 'Jane Smith',
          lastMessage: 'How are you?',
          profilePicture:"https://i.pinimg.com/originals/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.png",
        },
        // Add more chat objects here
        {
          id: 3,
          name: 'Alice Johnson',
          lastMessage: 'Nice weather today!',
          profilePicture:"https://live.staticflickr.com/65535/46785793685_5f5af0ab39_b.jpg",
        },
        {
          id: 4,
          name: 'Bob Brown',
          profilePicture: 'https://pixahive.com/wp-content/uploads/2021/01/Handsome-boy-304531-pixahive.jpg',
          lastMessage: 'See you later!',
        },
        {
          id: 5,
          name: 'Emily White',
          profilePicture: 'https://www.pngimages.in/uploads/png-compressd/2022/2022-September/happy-valentine-day-girl-png-download-free-hd.png',
          lastMessage: 'Got any plans for the weekend?',
          
        },
      
      ];
      

const ChatApp = () => {
    const [showChatList, setShowChatList] = useState(window.innerWidth >= 768);
    const [selectedChat, setSelectedChat] = useState(sampleChats[0]);
  
    useEffect(() => {
      const handleResize = () => {
        setShowChatList(window.innerWidth >= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div className="chat-app">
          {showChatList && <Sidebar chats={sampleChats} onSelectChat={setSelectedChat} />}
          <ChatBox chat={selectedChat} />
        </div>
      );
    };
export default ChatApp;