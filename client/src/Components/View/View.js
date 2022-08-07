import React, { useState, useContext, useEffect } from 'react';
import { getSellerdetails } from '../../Action/product';
import { PostContext } from '../../store/PostContext';
import Comment from './Comment';
import './View.css';
function View() {
  const { postDetails, setPostDetails } = useContext(PostContext)

  const [userDetails, setUserDetails] = useState('')

  useEffect(async () => {
    const seller = await getSellerdetails(postDetails.creator)
    console.log(seller)
    setUserDetails(seller)
  },[] )

  console.log(userDetails)
  return (
    <div className="viewParentDiv">
      <div className='detail-main' >
        <div>
          <div className="imageShowDiv">
            <img src={postDetails.image}
              alt="not available"
            />
          </div>
          <div className="rightSection">
              <div className="productDetails">
                <p>&#x20B9; {postDetails.price} </p>
                <span>{postDetails.name}</span>
                <p>{postDetails.catagory}</p>
                <span>{postDetails.cratedAt}</span>
              </div>
              <div className="contactDetails">
                <h5>Seller details</h5>
                <p>Name:{userDetails.username}</p>
                <p>phone:{userDetails.phone}</p>
              </div>
          </div>
        </div>
        <div className="comment-section">
          <Comment />
        </div>
      </div>
    </div>

  );
}
export default View;
