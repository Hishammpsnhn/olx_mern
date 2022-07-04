import Products from "../models/post.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const post = await Products.find()
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (req, res) => {
    const newPost = new Products(req.body)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = async (req, res) => {
    const {id} = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post in this id');
        await Products.findByIdAndDelete(id)
        res.json({message:'success fully deleted'})
    } catch (error) {
        console.log(error)
    }
}