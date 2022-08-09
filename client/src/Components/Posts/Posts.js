import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavPosts, getPosts } from '../../Action/product';
import { ProductContext } from '../../store/FpostContext';
import Post from './Post';
import './Post.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner'
import FavPost from './FavPost';
import { AuthContext } from '../../store/Context';

function Posts() {
  // const { searching, setSearching } = useContext(SearchContext)
  // const { postDetails, setPostDetails } = useContext(PostContext)
  const { setProduct } = useContext(ProductContext)
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [favProducts, setFavProducts] = useState([])
  const [favproductId,setFavProductId] = useState(null)
  useEffect(() => {
    setIsLoading(true)
    getPosts((post) => {
      setProduct(post)
      setIsLoading(false)
    })

  }, [user])

  useEffect(() => {
    setIsLoading(true)
    if (user) {
      getFavPosts((post) => {
         setFavProducts(post)
          setIsLoading(false)
      })
    }

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
            <Post setFavProductId={setFavProductId} favProducts={favProducts} setFavProducts={setFavProducts} />
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
            <FavPost favProducts={favProducts} setFavProducts={setFavProducts} favproductId={favproductId} setFavProductId={setFavProductId}/>
          )
        }
      </div>
    </div >
  )
}

export default Posts;
