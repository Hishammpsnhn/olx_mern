import React, { useState, useContext } from 'react'
import './View.css';
import { AuthContext } from '../../store/Context';
import { commentPost } from '../../Action/product';
import { PostContext } from '../../store/PostContext';

function Comment() {
    const { postDetails, setPostDetails } = useContext(PostContext)
    const { user, setUser } = useContext(AuthContext)
    const [comment, setComment] = useState('')

    const handlesubmit = async (e) => {
        e.preventDefault();
        const username = user?.result.username;
        const updatedComment = `${username} :${comment}`;
        const data = await commentPost(updatedComment, postDetails._id)
        setPostDetails(data)
        setComment('')
    }
   // if(postDetails.comments.length === 0)  return <p>no comments</p>
    return (
        <>
            <div className='comment-container'>
                <h5>Comments</h5>
                <input className='comment-textarea' name='comment' type="text" placeholder='add comment...' onChange={(e) => setComment(e.target.value)} value={comment} />
                <button onClick={handlesubmit} >click</button>
            </div>
            {
                postDetails.comments.slice(0).reverse().map((item,index) => {
                    return(
                    <div key={index}>
                    <p> 
                        <strong>{item.split(":")[0]}</strong>
                        {item.split(":")[1]}
                        </p>
                    </div> 
                    )
                })
            }
            <div>

            </div>
        </>
    )
}

export default Comment;