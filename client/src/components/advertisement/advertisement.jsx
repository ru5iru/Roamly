import React from 'react'
import "./advertisement.scss";

export const Advertisement = () => {
  return (
    <div className='advertisement'>
        <div className='up'>
            <img src="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="advertisement" />
        </div>
        <div className='bottom'>
            <p>Takeaway Menu Available</p>
        </div>
    </div>
  );
};

export default Advertisement;