const getBooks = require('./get-books');
const getBookById = require('./get-book-by-id');
const postBook = require('./post-book');
const putBook = require('./put-book');
const deleteBook = require("./delete-book");

module.exports = {
  getBooks,
  getBookById,
  postBook,
  putBook,
  deleteBook,
};
