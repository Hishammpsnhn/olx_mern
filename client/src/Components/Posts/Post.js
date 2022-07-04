import React,{useContext} from 'react'
import './Post.css';
import Heart from '../../assets/Heart';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../store/FpostContext';
import { deletePost, getPosts } from '../../Action/product';

function Post() {
    const { product, setProduct } = useContext(ProductContext)

    const handleDelete = (id) => {
        deletePost(id)
        setProduct(product.filter((item) => item._id !== id))
    }
    
    
    return (
        <div className="cards">
            {
                product.map(product => {
                    return (
                        <div className="card"
                        // onClick={() => { setPostDetails(product) navigate('/view') }}
                        >
                            <div className="favorite">
                                <Heart></Heart>
                            </div>
                            <div className="image">
                                <img src={product.image} alt="unavailable" />
                            </div>
                            <div className="content">
                                <p className="rate">&#x20B9; {product.price}</p>
                                <span className="kilometer">{product.catagory}</span>
                                <p className="name"> {product.name}</p>
                                <button className='button'
                                    onClick={() => handleDelete(product._id)}
                                >Delete</button>
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