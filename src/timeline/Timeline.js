import React, { useState } from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "my_user1",
      postImage: "https://wallpapers.com/images/hd/hd-river-in-the-mountains-kgb9wrcm1wmrfa5m.webp",
      likes: 32,
      timestamp: "2d"
    },
    {
      user: "my_user2",
      postImage: "https://wallpapers.com/images/hd/hd-close-up-of-lion-xk00jcsvh1occ0pw.webp",
      likes: 15,
      timestamp: "1d"
    },
    {
      user: "my_user3",
      postImage: "https://wallpapers.com/images/high/hd-farm-at-sunset-xwh3uz0jo2fw2u26.webp",
      likes: 25,
      timestamp: "3d"
    },
    {
      user: "my_user4",
      postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 32,
      timestamp: "3h"
    }
  ]); 
  return (
    <div className='timeline'>
        <div class="timeline__left">
            <div class="timeline__posts">
                {posts.map(post => (
                  <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
                ))}
            </div>
        </div>
        <div class="timeline__right">
            <Suggestion />
        </div>
    </div>
  )
}

export default Timeline