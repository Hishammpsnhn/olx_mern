import React from 'react'
import './Post.css';

function FavPost(product) {
    console.log(product.favProducts)
    return (
        <div className="cards">
            {
                product.favProducts?.map(product => {
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