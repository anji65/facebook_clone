import React from 'react'
import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <span>Varun</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <span>Varun</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <p>
                <span>Varun</span>  Changed their cover photo
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user" >
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <p>
                <span>Varun</span> Changed their cover photo
              </p>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user" >
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <div className='online' />
              <span>Varun</span>
            </div>
          </div>
          <div className="user" >
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <div className='online' />
              <span>Varun</span>
            </div>
          </div>
          <div className="user" >
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <div className='online' />
              <span>Varun</span>
            </div>
          </div>
          <div className="user" >
            <div className="userInfo">
              <img src="https://static.zoomnews.com/photo/96566026/96566026.jpg" alt="" />
              <div className='online' />
              <span>Varun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar