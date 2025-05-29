const Review = require('../models/reviewModel');

exports.addReview = async (req, res) => {
  const exists = await Review.findOne({ book: req.params.id, user: req.user.userId });
  if (exists) return res.status(400).json({ message: 'Already reviewed' });
  const review = new Review({ ...req.body, book: req.params.id, user: req.user.userId });
  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Not allowed' });
  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Not allowed' });
  await review.deleteOne();
  res.json({ message: 'Review deleted' });
};
