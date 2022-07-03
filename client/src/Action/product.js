import * as api from "../Api";

export const getPosts = async (callback)=>{
    let {data} = await api.getPosts()
    callback(data)
}

export const createPost = async (product)=>{
    try {
        await api.createPosts(product)
    } catch (error) {
        console.log(error)
    }
}