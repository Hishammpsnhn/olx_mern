import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost, getPosts } from '../../Action/product';
import Heart from '../../assets/Heart';
import { ProductContext } from '../../store/FpostContext';
import { PostContext } from '../../store/PostContext';
import { SearchContext } from '../../store/SearchContext';
import Post from './Post';
import './Post.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, BallTriangle, ThreeDots } from 'react-loader-spinner'

function Posts() {
  const { searching, setSearching } = useContext(SearchContext)
  const { product, setProduct } = useContext(ProductContext)
  const { postDetails, setPostDetails } = useContext(PostContext)

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    setIsLoading(true)
    getPosts((post) => {
      setProduct(post)
      setIsLoading(false)
    })
  }, [])

  return (

    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span >
          <span>View more</span>
        </div >
        {
          isLoading ? (
            <ThreeDots color="#00BFFF" height={80} width={80} />
          ) : (
            <Post />
          )
        }
      </div >
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
    </div >
  )
}

export default Posts;
