// Sidebar.js
import React, { useState } from 'react';
import './sidebar.scss';

const Sidebar = ({ userPhoto, chats, onSelectChat }) => {
  const [searchText, setSearchText] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={"https://www.freeiconspng.com/thumbs/return-button-png/back-undo-return-button-png-5.png"} alt="User" className="user-photo" />
        <div className="find-people">
          {<img src={"https://jaduikahaniya.com/wp-content/uploads/2020/10/beautiful-girls.webp"} alt="Find People" className="find-people-icon" />}
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔎 Search chats"
          value={searchText}
        //   onChange={e => setSearchText(e.target.value)}
        />
      </div>
      {filteredChats.map(chat => (
        <div
          key={chat.id}
          className="chat-item"
        //   onClick={() => onSelectChat(chat)}
        >
          <img src={chat.profilePicture} alt={chat.name} />
          <div className="chat-details">
            <p className="chat-name">{chat.name}</p>
            <p className="last-message">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
