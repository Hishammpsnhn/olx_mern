import React, { useContext} from 'react'
import './Post.css';
import Heart from '../../assets/Heart';
import { ProductContext } from '../../store/FpostContext';
import { deletePost,favPost } from '../../Action/product';
import { AuthContext } from '../../store/Context';

function Post() {
    const { product, setProduct } = useContext(ProductContext)
    const { user} = useContext(AuthContext)

    const handleDelete = (id) => {
        deletePost(id)
        setProduct(product.filter((item) => item._id !== id))
    }
    
    const handlefav = (product)=>{
        favPost(product)
    }


    return (
        <div className="cards">
            {
                product.map(product => {
                    return (
                        <div className="card"
                        // onClick={() => { setPostDetails(product) navigate('/view') }}
                        >
                            <div className="favorite" onClick={()=> handlefav(product._id)} >
                                <Heart></Heart>
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
        </div>
    )
}

export default Post