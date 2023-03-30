import { MoreVert } from '@mui/icons-material';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({posts}) => {
    const [like, setLike] = useState(posts.like); 
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = ()=>{
        setLike(isLiked? like-1 : like+1); 
        setIsLiked(isLiked? false : true); 
    }
    
  return (
    <div className="post">
        <div className="postWrapper">   
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter(u=>u.id == posts.userId)[0].profilePicture} alt="" />
                    <span className='postUserName'>{Users.filter(u=>u.id == posts.userId)[0].username}</span>
                    <span className='postDate'>{posts.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/> 
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{posts?.desc}</span>
                <img className='postImg' src={posts.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler}/>
                    <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                       {posts.comment}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post