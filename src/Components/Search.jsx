import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find you user'/>
      </div>
      <div className="userChat">
        <img src='https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8&w=1000&q=80' alt='user icon'/>
        <div className="userChatInfo">
          <span>Gulam</span>
        </div>
      </div>
    </div>
  )
}

export default Search