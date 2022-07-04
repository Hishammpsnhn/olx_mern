import axios from 'axios';
const API = axios.create({baseURL:"http://localhost:8000"})

//fetch all post from db
export const getPosts = ()=> API.get('/posts')

export const createPosts = (product)=> API.post('/posts',product) 
export const deletePost = (id)=> API.get(`/posts/${id}`)