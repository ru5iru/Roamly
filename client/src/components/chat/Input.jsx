import React from 'react'
import './messenger.scss'
import attach from '../../assets/images/attachment.png'
import img from '../../assets/images/imageicon.png'

export default function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
      <img src={attach} alt="" />
      <input type="file" style={{display: "none"}} id="file"/>
      <label htmlFor="file">
        <img src={img} alt="" />
      </label>
      <button>Send</button>
      </div>
    </div>
  )
}
