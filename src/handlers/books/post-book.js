const { validateBook } = require('../../utils');
const { Book } = require('../../models');

async function postBook(req, res) {
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

  const book = new Book({
    title,
    author,
  });

  await book.save();

  res.send(book);
}

module.exports = postBook;
