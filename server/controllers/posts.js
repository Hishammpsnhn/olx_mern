import Products from "../models/post.js";

export const getPosts = async(req,res)=>{
    try {
        const post = await Products.find()
        res.status(201).json(post)
    } catch (error) {
        
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