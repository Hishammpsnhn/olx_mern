import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { AuthContext } from '../../store/Context';
import { ProductContext } from '../../store/FpostContext';
import './Post.css';

function FavPost({ favProducts,setFavProducts, favproductId, setFavProductId }) {
    //const [favProduct, setFavProduct] = useState(favProducts)
    // const { product, setProduct } = useContext(ProductContext)
    console.log("favproduct", favProducts)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (favproductId) {
            console.log(favproductId)
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
                        <div className="card">
                            <div className="image">
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