import React, { useContext } from 'react'
import { AuthContext } from '../../store/Context';
import './Post.css';

function FavPost(product) {
    const { user } = useContext(AuthContext)

    if(!user?.result) return <h5>please login to view and add items </h5>
   if(product.favProducts.length === 0) return <h5>Nothing you like</h5>
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