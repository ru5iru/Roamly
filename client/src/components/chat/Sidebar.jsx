import React from 'react'
import './messenger.scss'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import Chat from './Chat'

export default function Sidebar() {
  return (
    
    <div className='sidebar'>
      {/* <div><button>close</button></div> */}
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}
