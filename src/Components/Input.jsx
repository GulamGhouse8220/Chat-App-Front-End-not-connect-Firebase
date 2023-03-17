import React from 'react'
import Img from "../../src/img/images (4).png"
import Attach from "../../src/img/Ic_attach_file_48px.svg.png"

const Input = () => {
  return (
    <div className='inputs'>
      <input type="text" placeholder='type something...'/>
      <div className="send">
        <img src={Attach} alt='files' width={30}/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={Img} alt='images' width={30}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input