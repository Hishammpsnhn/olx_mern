import express from 'express';
import {createPost, deletePost, getPosts,favPost, getFavPosts,deleteFavPost,comment} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router = express.Router();


router.get('/',getPosts);
router.post('/',auth,createPost);
router.get('/:id/delete',auth,deletePost)

router.get('/favorite',auth,getFavPosts);
router.get('/:id/fav',auth,favPost)
router.get('/:id/deletefav',auth,deleteFavPost)

router.post('/:id/comment',auth,comment);

export default router;