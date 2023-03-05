const { Book } = require('../../models');

async function getBooks(req, res) {
  const { query } = req;

  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;

  const books = await Book.find().skip(startIndex).limit(limit);
  const count = await Book.countDocuments();

  const totalPages = Math.ceil(count / limit);

  res.json({
    books,
    totalPages,
  });
}

module.exports = getBooks;
