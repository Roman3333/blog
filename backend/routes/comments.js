import { Router } from 'express';
const router = new Router();
import { checkAuth } from '../utils/checkAuth.js';
import { createComment, getLastComments } from '../controllers/comments.js';

// Create Comment
// http://localhost:3001/api/comments/:id
router.post('/:id', checkAuth, createComment);

// Get last 5 comments
// http://localhost:3001/api/comments/lastComments
router.get('/lastComments', getLastComments);

export default router;
