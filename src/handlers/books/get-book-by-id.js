const { Book } = require('../../models');

async function getBookById(req, res) {
  const { params } = req;
  const { id } = params;

  const book = await Book.findById(id);

  if (!book) {
    const message = 'The book with the given ID was not found.';
    const statusCode = 404;

    res.status(404).json({
      statusCode,
      message,
    });

    return;
  }

  res.send(book);
}

module.exports = getBookById;
