import React from 'react'
import { BsFacebook, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { MdOutlinePlace } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import Posts from '../posts/Posts'
import './profile.scss'



const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://blog.hootsuite.com/wp-content/uploads/2017/06/facebook-cover-photos-1200x550.jpg" alt="" className='cover' />
        <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <BsFacebook />
            <AiOutlineInstagram />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div className="center">
            <span>varun</span>
            <div className="info">
              <div className="item">
                <MdOutlinePlace />
                <span>Hyd</span>
              </div>
              <div className="item">
                <TbWorld />
                <span>Hyd</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <HiOutlineMail />
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div style={{padding: '10px 70px'}}>

      <Posts />
      </div>

    </div>
  )
}

export default Profile