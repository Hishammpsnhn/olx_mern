import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name:String,
    catagory:String,
    price:String,
    image:String,
})
const Products = mongoose.model('products',postSchema) 

export default Products;