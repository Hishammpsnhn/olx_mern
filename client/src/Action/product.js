import * as api from "../Api";

export const getPosts = async (callback) => {  
    const {data} = await api.getPosts()
    callback(data)
}

export const createPost = async (product) => {
    try {
        await api.createPosts(product)
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = async (id) => {
    try {
        await api.deletePost(id)
    } catch (error) {
        console.log(error)
    }
}
export const favPost = async (product) => {
    console.log("post")
    try {
     await api.favPost(product)
    } catch (error) {
        console.log(error)
    }
} 

export const getFavPosts = async (callback) => {  
    const {data} = await api.getFavPosts()
    console.log(data)
    callback(data)
}

