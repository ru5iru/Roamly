import React from 'react'
import './messenger.scss'

export default function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userchat">
        <img src="https://e1.pxfuel.com/desktop-wallpaper/272/610/desktop-wallpaper-anime-girl-profile-thumbnail.jpg" alt="none" />
        <div className="userchatInfo">
          <span>Thisura</span>
        </div>

      </div>
    </div>
  )
}
