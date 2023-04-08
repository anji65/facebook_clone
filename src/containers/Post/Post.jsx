import React, { useState } from 'react'
import { BsThreeDots, BsFillShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdMessage } from 'react-icons/md'
import './post.scss'
import Comments from '../comments/Comments'

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const HandleOpencommnet = () => {
        setCommentOpen(true)
        alert("jgvghvghv")
    }
    const liked = false
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <BsThreeDots />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {
                            liked ? < AiFillHeart /> : <AiOutlineHeart />
                        }
                        12 likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <MdMessage onClick={() => setCommentOpen(!commentOpen)} />
                        12 comments

                    </div>
                    <div className="item">
                        <BsFillShareFill />
                        shared
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post