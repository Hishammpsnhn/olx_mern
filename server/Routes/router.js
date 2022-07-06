import express from 'express';
import {createPost, deletePost, getPosts} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router = express.Router();


router.get('/',getPosts);
router.post('/',auth,createPost);
router.get('/:id',auth,deletePost)

export default router;