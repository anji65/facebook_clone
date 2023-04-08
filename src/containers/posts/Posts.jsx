import React from 'react'
import Post from '../Post/Post'
import './posts.scss'

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "varun",
      userId: 1,
      desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
      img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
      profilePic: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"
    },
    {
      id: 2,
      name: "tej",
      userId: 2,
      desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
      img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
      profilePic: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"

    },
    {
      id: 3,
      name: "varun",
      userId: 3,
      desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
      img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
      profilePic: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"

    },
    {
      id: 4,
      name: "sunil",
      userId: 4,
      desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
      img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
      profilePic: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"

    },
    {
      id: 5,
      name: "anil",
      userId: 5,
      desc: "impedit facere dolorum iusto natus, ea quis! Neque, dignissimos",
      img: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
      profilePic: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*"

    },
  ]
  return (
    <div className='posts'>
      {
        posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts