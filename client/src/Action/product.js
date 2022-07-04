import * as api from "../Api";

export const getPosts = async (callback) => {
    console.log("data33")    
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
    console.log(id)
    try {
        await api.deletePost(id)
    } catch (error) {
        console.log(error)
    }

} 