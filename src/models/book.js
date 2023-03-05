const mongoose = require('mongoose');

const book = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
});

const Book = mongoose.model('Book', book);

module.exports = Book;
