import axios from 'axios';
const API = axios.create({baseURL:"http://localhost:8000"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req
})
//authentication api 
export const singup = (userDetails)=> API.post ('/auth/singup',userDetails)
export const login = (userDetails)=> API.post ('/auth/login',userDetails)

//fetch all post from db
export const getPosts = ()=> API.get('/posts')
export const createPosts = (product)=> API.post('/posts',product) 
export const deletePost = (id)=> API.get(`/posts/${id}/delete`)
export const commentPost = (commentText,id)=> API.post(`/posts/${id}/comment`,{commentText})


//favaroite post
export const getFavPosts = ()=> API.get('/posts/favorite')
export const favPost = (id)=> API.get(`/posts/${id}/fav`)
export const deleteFavPost=(id)=> API.get(`/posts/${id}/deletefav`)

//payment
export const payment = (rupees)=> API.post(`/posts/payment`,{amount:rupees})
export const verifyPayment = (response)=> API.post(`/posts/verify`,response)

export const getSellerdetails = (id)=> API.get(`/posts/${id}/view`)
