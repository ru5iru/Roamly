import React, { useContext } from 'react'
import Chat from './Chat'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../../context/ChatContext';

function ChatBox() {

    const {data} = useContext(ChatContext);


    return(
        <div>
            <p>Hello</p>
        </div>
    )
  
}

export default ChatBox
