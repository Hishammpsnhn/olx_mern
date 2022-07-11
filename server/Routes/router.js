import express from 'express';
import {createPost, deletePost, getPosts,favPost, getFavPosts} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router = express.Router();


router.get('/',getPosts);
router.post('/',auth,createPost);
router.get('/:id/delete',auth,deletePost)

router.get('/:id/fav',auth,favPost)
router.get('/favorite',auth,getFavPosts);
export default router;