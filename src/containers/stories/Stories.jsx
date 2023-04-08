import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {
    const { currentUser } = useContext(AuthContext)

    const stories = [
        {
            id: 1,
            name: "varun",
            img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"
        },
        {
            id: 2,
            name: "tej",
            img: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        },
        {
            id: 3,
            name: "varun",
            img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"
        },
        {
            id: 4,
            name: "tej",
            img: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        }
    ]

    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser?.profilePicture} alt="" />
                <span>{currentUser?.name}</span>
                <button>+</button>
            </div>
            {
                stories.map((story) => (
                    <div className="story">
                        <img src={story.img} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories