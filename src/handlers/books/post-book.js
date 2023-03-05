const { validateBook } = require('../../utils');
const { Book } = require('../../models');

async function postBook(req, res) {
  const { body } = req;

  const { error } = validateBook(body);

  if (error) {
    res.status(400).send(error.details[0].message);

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
