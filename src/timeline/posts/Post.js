import React from 'react'
import {useState} from "react";
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timestamp}) {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__headerAuthor">
          <span className='avatar'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          </span>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
              {!like ? <FavoriteBorderIcon onClick={()=>setLike(!like)} className="postIcon"/>
                  : <FavoriteIcon onClick={()=>setLike(!like)} className="postIcon"/>}
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
              {saved ? <BookmarkIcon onClick={()=>setSaved(!saved)} className='postIcon'/> :
                        <BookmarkBorderIcon onClick={()=>setSaved(!saved)} className='postIcon'/>}
          </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  )
}

export default Post