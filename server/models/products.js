import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    catagory: String,
    price: String,
    image: String,
    creator: String,
    comments:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default: new Date()
    }

})
const Products = mongoose.model('products', postSchema)

export default Products;