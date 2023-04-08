import React, { createContext, useContext } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { AuthContext } from '../../context/authContext'
import './leftbar.scss'

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser?.profilePicture} alt="" />
            <span>{currentUser?.name}</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Groups</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <HiOutlineUser />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Groups</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <HiOutlineUser />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Groups</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Watch</span>
          </div>
        </div>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <HiOutlineUser />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Groups</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Watch</span>
          </div>
        </div>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <HiOutlineUser />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Groups</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <HiOutlineUser />
            <span>Watch</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar