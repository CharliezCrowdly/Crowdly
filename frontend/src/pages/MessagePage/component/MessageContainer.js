import React from 'react'
import Chat from './Chat'
import Wrapper from '../wrapper/MessageContainer'
import {IoIosSend} from "react-icons/io"
const MessageContainer = () => {
  return (
    <Wrapper>

    
        <Chat/>

        <div className="search-area">
            <div className="searchbar">
                <input type="text" placeholder='Enter Message' className='search-input' />
            </div>
            <IoIosSend className='icon'/>
        </div>
 
    </Wrapper>
  )
}

export default MessageContainer
