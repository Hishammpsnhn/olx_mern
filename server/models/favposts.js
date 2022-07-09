import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: String,
    name: String,
    catagory: String,
    price: String,
    image: String,
    creator: String,


})
const FavPost = mongoose.model('fav-products', postSchema)

export default FavPost;