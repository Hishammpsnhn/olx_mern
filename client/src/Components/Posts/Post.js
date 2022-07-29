import React, { useContext, useState } from 'react'
import './Post.css';
import Heart from '../../assets/Heart';
import { ProductContext } from '../../store/FpostContext';
import { deletePost, favPost, deleteFavPost } from '../../Action/product';
import { AuthContext } from '../../store/Context';
import { FavoriteBorderOutlined, Favorite } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { PostContext } from '../../store/PostContext';

function Post({ setFavProductId, favProducts, setFavProducts }) {

    const { postDetails, setPostDetails } = useContext(PostContext)
    const { product, setProduct } = useContext(ProductContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleDelete = (id) => {
        deletePost(id)
        setProduct(product.filter((item) => item._id !== id))
    }

    const handlefav = (productId) => {
        const fav = favProducts.find((item) => item._id === productId);
        if (fav) {
            deleteFavPost(productId)
            setFavProductId(productId)

        } else {
            favPost(productId, (fav) => {
                const newfav = fav.find((item) => item._id === productId);
                setFavProducts([...favProducts, newfav])
            })
        }
    }
    const handleDetail=(product)=>{
        navigate("/view")
        setPostDetails(product)
    }


    return (
        <div className="cards">
            {
                product.map(product => {
                    return (
                        <div className="card"
                         onClick={()=>{handleDetail(product)}}
                        >
                            <div className="favorite" onClick={() => handlefav(product._id)} >
                                {
                                    favProducts.find((items) => items._id === product._id) ?
                                        <Favorite /> : <FavoriteBorderOutlined />
                                }

                            </div>
                            <div className="image">
                                <img src={product.image} alt="unavailable" />
                            </div>
                            <div className="content">
                                <div>
                                    <p className="rate">&#x20B9; {product.price}</p>
                                    <span className="kilometer">{product.catagory}</span>
                                    <p className="name"> {product.name}</p>
                                </div>
                                <div style={{ marginTop: '15px' }}>
                                    {
                                        user?.result?._id === product.creator && (
                                            <span className='button'
                                                onClick={() => handleDelete(product._id)}
                                            >Delete</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="date">
                                <span>{product.cratedAt}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Post