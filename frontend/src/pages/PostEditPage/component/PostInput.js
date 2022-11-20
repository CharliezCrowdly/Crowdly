import React from 'react'
import Wrapper from "../wrapper/PostInput"

const PostInput = ({type,placeholder,value,name}) => {
  return (
    <Wrapper>
        <label htmlFor="">{name}</label>
        <input type={type} placeholder='Enter Description' />
      
    </Wrapper>
  )
}

export default PostInput
