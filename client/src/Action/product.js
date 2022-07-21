import * as api from "../Api";

//All posts
export const getPosts = async (callback) => {
    const { data } = await api.getPosts()
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

//favorite post
export const getFavPosts = async (callback) => {
    const { data } = await api.getFavPosts()
    console.log(data)
    callback(data)
}

export const favPost = async (product, callback) => {
    try {
        const { data } = await api.favPost(product);
            console.log(data)
            callback(data);
       
    } catch (error) {
        console.log(error);
    }
}

export const deleteFavPost= async(favProductId)=>{
    try {
        await api.deleteFavPost(favProductId);

    } catch (error) {
        console.log(error)
    }
}

//comment post
export const commentPost = async(commentText,id)=>{
    try {
        await api.commentPost(commentText,id)
    } catch (error) {
        console.log(error)
    }
}

