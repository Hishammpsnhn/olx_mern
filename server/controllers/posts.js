import Products from "../models/post.js";
import mongoose from "mongoose";
import FavPost from "../models/favposts.js";

export const getPosts = async (req, res) => {
    try {
        const post = await Products.find()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
    }
}

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
export const deletePost = async (req, res) => {
    const { id } = req.params;

    console.log("delete called", id)
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post in this id');
        await Products.findByIdAndDelete(id)
        res.json({ message: 'success fully deleted' })
    } catch (error) {
        console.log(error)
    }
}
export const favPost = async (req, res) => {
    const post = req.body; 
    const userId = req.userId;
    const newPost = new FavPost({...post,userId:userId});
    try {
        await newPost.save() ;      
        res.status(202).json(newPost)
    } catch (error) {
        console.log(error);
    }

}
export const getFavPosts = async (req, res) => {
    console.log("called fav")
    const userId = req.userId;
    try {
        //const userpost = await FavPost.findOne({userId})
        const post = await FavPost.find()
        //console.log(userpost)
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
    }
}
