import * as api from "../Api";

//All posts
let posts = [];
export const getPosts = async (callback) => {
    const { data } = await api.getPosts()
    callback(data)
    posts = data;
    console.log(data);
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

export const deleteFavPost = async (favProductId) => {
    try {
        await api.deleteFavPost(favProductId);

    } catch (error) {
        console.log(error)
    }
}

//comment post
export const commentPost = async (commentText, id) => {
    try {
        let { data } = await api.commentPost(commentText, id);
        return data
    } catch (error) {
        console.log(error)
    }
}
//payment
export const payment = async (rupees) => {
    try {
        let { data } = await api.payment(rupees);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const verifyPayment = async (response) => {
    try {
        let { data } = await api.verifyPayment(response);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
export const search = async (quary) => {
    const searchPosts = posts.filter(e => e.name.toLowerCase().includes(quary));
    console.log(searchPosts.length)
    if(searchPosts.length === 0){
        return null;
    }else{
    return searchPosts;
    }
}

export const getSellerdetails = async (id)=>{
    try {
        const {data} = await api.getSellerdetails(id);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}