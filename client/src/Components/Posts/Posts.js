import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavPosts, getPosts } from '../../Action/product';
import { ProductContext } from '../../store/FpostContext';
import { PostContext } from '../../store/PostContext';
import { SearchContext } from '../../store/SearchContext';
import Post from './Post';
import './Post.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner'
import FavPost from './FavPost';

function Posts() {
  const { searching, setSearching } = useContext(SearchContext)
  const { product, setProduct } = useContext(ProductContext)
  const { postDetails, setPostDetails } = useContext(PostContext)
  const [user,setUser] =useState( JSON.parse(localStorage.getItem('profile')))
  console.log(user)

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [favProducts, setFavProducts] = useState([])


  useEffect(() => {
    setIsLoading(true)
    getPosts((post) => {
      setProduct(post)
      setIsLoading(false)
    })

  }, [user])

  useEffect(() => {
    setIsLoading(true)
    getFavPosts((post) => {
      const newPost = post.filter((item) => item.userId === user?.result._id)
      if(newPost){
        setFavProducts(newPost)
        setIsLoading(false)
      }
    })

  }, [user])

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
          <span>Favorite </span>
        </div>
        {
          isLoading ? (
            <ThreeDots color="#00BFFF" height={80} width={80} />
          ) : (
            <FavPost favProducts={favProducts} user={ user} />
          )
        }
      </div>
    </div >
  )
}

export default Posts;
