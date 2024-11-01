import express from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController';
import { requireLogin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/books', requireLogin, createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', requireLogin, updateBook);
router.delete('/books/:id', requireLogin, deleteBook);

export default router;
