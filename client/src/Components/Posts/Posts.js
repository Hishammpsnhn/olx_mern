import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';

import { ProductContext } from '../../store/FpostContext';
import { PostContext } from '../../store/PostContext';
import { SearchContext } from '../../store/SearchContext';
import './Post.css';

function Posts() {
  const { searching, setSearching } = useContext(SearchContext)
  const {product,setProduct}= useContext(ProductContext)

  const { postDetails, setPostDetails } = useContext(PostContext)
  
  const navigate = useNavigate()

 
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {
           product.map(product => {

              return (
                <div className="card"
                  onClick={() => {
                    setPostDetails(product)
                    navigate('/view')
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.catagory}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.cratedAt}</span>
                  </div>
                </div>

              )
            })
          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
