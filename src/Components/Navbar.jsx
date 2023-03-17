import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className="logo">Gulam Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/955657/pexels-photo-955657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
        <span>Haseem</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar