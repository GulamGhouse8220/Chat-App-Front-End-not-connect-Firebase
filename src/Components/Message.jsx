import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="https://images.pexels.com/photos/955657/pexels-photo-955657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="users" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src="https://images.pexels.com/photos/955657/pexels-photo-955657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="users" />
        </div>

    </div>
  )
}

export default Message