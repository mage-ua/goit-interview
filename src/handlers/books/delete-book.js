const { Book } = require('../../models');

async function deleteBook(req, res) {
  const { params } = req;
  const { id } = params;

  const book = await Book.findByIdAndRemove(id);

  if (!book) {
    const message = 'The book with the given ID was not found.';

    res.status(404).send(message);

    return;
  }

  res.send(book);
}

module.exports = deleteBook;
