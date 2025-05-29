const Book = require('../models/bookModel');
const Review = require('../models/reviewModel');

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

exports.getAllBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = author;
  if (genre) filter.genre = genre;
  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate('reviews');
  const averageRating = book.reviews.length
    ? book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length
    : 0;
  res.json({ ...book.toObject(), averageRating });
};

exports.searchBooks = async (req, res) => {
  const q = req.query.query;
  const regex = new RegExp(q, 'i');
  const books = await Book.find({ $or: [{ title: regex }, { author: regex }] });
  res.json(books);
};