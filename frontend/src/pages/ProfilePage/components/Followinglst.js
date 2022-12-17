import React from 'react'
import { useAppContext } from '../../../context/appContext'
import Wrapper from "../wrappers/Following";

const Followinglst = () => {
    const {profileUser} = useAppContext()
    const {following} = profileUser
    var filterlst = following;

  return (
    <Wrapper>
        {filterlst.map((item)=>{
            return <div className="signalfollow " key={item._id}>
             
                  <img src={item.profilePicture} alt="" />
                  <span>{item.username}</span>
            
                <button>remove</button>
            </div>
        })}
    </Wrapper>
  )
}

export default Followinglst