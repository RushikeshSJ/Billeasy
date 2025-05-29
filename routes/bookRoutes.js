const express = require('express');
const router = express.Router();
const { addBook, getAllBooks, getBookById, searchBooks } = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');

router.get('/', getAllBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);
router.post('/', auth, addBook);

module.exports = router;