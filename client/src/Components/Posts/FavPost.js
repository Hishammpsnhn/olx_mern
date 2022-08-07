import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/Context';
import { ProductContext } from '../../store/FpostContext';
import { PostContext } from '../../store/PostContext';
import './Post.css';

function FavPost({ favProducts, setFavProducts, favproductId, setFavProductId }) {
    const { postDetails, setPostDetails } = useContext(PostContext)
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleDetail = (product) => {
        navigate("/view");
        setPostDetails(product)
    }
    useEffect(() => {
        if (favproductId) {
            setFavProducts(favProducts.filter((item) => item._id !== favproductId))
            setFavProductId(null)
        }
    }, [favproductId])

    if (!user?.result) return <h5>please login to view and add items </h5>
    if (favProducts.length === 0) return <h5>Nothing you like</h5>
    return (
        <div className="cards">
            {
                favProducts?.map(product => {
                    return (
                        <div key={product._id} className="card">
                            <div onClick={() => { handleDetail(product) }} className="image">
                                <img src={product.image} alt="unavailable" />
                            </div>
                            <div className="content">
                                <div>
                                    <p className="rate">&#x20B9; {product.price}</p>
                                    <span className="kilometer">{product.catagory}</span>
                                    <p className="name"> {product.name}</p>
                                </div>
                            </div>
                            <div className="date">
                                <span>{product.cratedAt}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavPost