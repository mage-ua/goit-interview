const { validateBook } = require('../../utils');
const { Book } = require('../../models');

async function putBook(req, res) {
  const { body } = req;

  const { error } = validateBook(body);

  if (error) {
    const statusCode = 400;

    res.status(statusCode).json({
      statusCode,
      message: error.details[0].message,
    });

    return;
  }

  const { title, author } = body;

  const book = await Book.findByIdAndUpdate(
    req.params.id,
    {
      title,
      author,
    },
    { new: true },
  );

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

module.exports = putBook;
