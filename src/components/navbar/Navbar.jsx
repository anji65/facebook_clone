import React, { useContext } from 'react'
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai'
import { MdOutlineDarkMode } from 'react-icons/md'
import { FiSearch, } from 'react-icons/fi'
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import { IoIosNotificationsOutline, } from 'react-icons/io'
import { IoMdSunny } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/authContext'


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="navbar__left">
        <Link to="/" style={{ textDecoration: 'none' }} >
          <span>Logo</span>
        </Link>
        <AiOutlineHome />
        {
          darkMode ?
            <IoMdSunny onClick={toggle} style={{ cursor: "pointer" }} />
            :
            <MdOutlineDarkMode onClick={toggle} style={{ cursor: "pointer" }} />
        }
        <AiOutlineAppstore />
        <div className="search">
          <FiSearch />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <HiOutlineUser />
        <HiOutlineMail />
        <IoIosNotificationsOutline />
        <div className="uers">
          <img src={currentUser?.profilePicture} alt="" />
          <span>{currentUser?.name}</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar