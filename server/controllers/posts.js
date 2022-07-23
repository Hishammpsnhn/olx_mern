import Products from "../models/products.js";
import mongoose from "mongoose";
import Users from "../models/user.js";

//fetch all posts
export const getPosts = async (req, res) => {
    try {
        const post = await Products.find()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
    }
}

// user create product for selling
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Products({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
    }
}
//delete product by uploaded user
export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post in this id');
        await Products.findByIdAndDelete(id)
        res.json({ message: 'successfully deleted' })
    } catch (error) {
        console.log(error)
    }
}


//get all favorite post from db 
export const getFavPosts = async (req, res) => {
    try {
        const loginedUser = await Users.findById(req.userId);
        const favorite = loginedUser.favorites;
        const favPosts = await Products.find({ '_id': { $in: favorite } })
        res.status(201).json(favPosts)
    } catch (error) {
        console.log(error)

    }
}
//add product id into userdb,find product using params-id
export const favPost = async (req, res) => {
    const { id } = req.params;
    if (!req.userId) return res.json({ message: 'unauthenticated' })
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')
    try {
        const loginedUser = await Users.findById(req.userId);
        loginedUser.favorites.push(id);
        const favPosts = await Products.find({ '_id': { $in: id } })
        res.status(201).json(favPosts)
        await Users.findByIdAndUpdate(req.userId, loginedUser, { new: true });
    } catch (error) {
        console.log(error)
    }
}
//remove product id from user db
export const deleteFavPost = async (req, res) => {
    const { id } = req.params;
    if (!req.userId) return res.json({ message: 'unauthenticated' })
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')
    try {
        const LoginedUser = await Users.findById(req.userId);
        LoginedUser.favorites = await LoginedUser.favorites.filter((favId) => favId !== id)
        await Users.findByIdAndUpdate(req.userId, LoginedUser, { new: true });
    } catch (error) {
        console.log(error)
    }
}

// add comments on post
export const comment = async (req, res) => {
    const { id } = req.params;
    const  {commentText}  = req.body;
    console.log(id,commentText)
    try {
        const post = await Products.findById(id);
        post.comments.push(commentText);
        const updatedPost = await Products.findByIdAndUpdate(id, post, { new: true });
        res.json(updatedPost);      
    } catch (error) {
        console.log(error);
    }
}