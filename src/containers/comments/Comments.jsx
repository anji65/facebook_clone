import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

import './comments.scss'

const Comments = () => {
    const { currentUser } = useContext(AuthContext)
    
    const comments = [
        {
            id: 1,
            name: "varun",
            userId: 1,
            desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpPclvcTr1hRg8ju-qJ-5rqceagYXjmxA7tjLa0NWjw&usqp=CAU&ec=48600113"
        },
        {
            id: 2,
            name: "tej",
            userId: 2,
            desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpPclvcTr1hRg8ju-qJ-5rqceagYXjmxA7tjLa0NWjw&usqp=CAU&ec=48600113"

        },
        {
            id: 3,
            name: "varun",
            userId: 3,
            desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpPclvcTr1hRg8ju-qJ-5rqceagYXjmxA7tjLa0NWjw&usqp=CAU&ec=48600113"

        },
        {
            id: 4,
            name: "sunil",
            userId: 4,
            desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpPclvcTr1hRg8ju-qJ-5rqceagYXjmxA7tjLa0NWjw&usqp=CAU&ec=48600113"

        },
        {
            id: 5,
            name: "anil",
            userId: 5,
            desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpPclvcTr1hRg8ju-qJ-5rqceagYXjmxA7tjLa0NWjw&usqp=CAU&ec=48600113"

        },
    ]

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser?.profilePicture} alt="" />
                <input type="text" placeholder='Write a comment' />
                <button>Send</button>
            </div>
            {
                comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className='date'>1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments