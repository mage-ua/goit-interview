const { Book } = require('../../models');

async function deleteBook(req, res) {
  const { params } = req;
  const { id } = params;

  const book = await Book.findByIdAndRemove(id);

  if (!book) {
    const message = 'The book with the given ID was not found.';
    const statusCode = 404;

    res.status(statusCode).json({
      statusCode,
      message,
    });

    return;
  }

  res.send(book);
}

module.exports = deleteBook;
