const { validateBook } = require('../../utils');
const { Book } = require('../../models');

async function putBook(req, res) {
  const { body } = req;

  const { error } = validateBook(body);

  if (error) {
    res.status(400).send(error.details[0].message);

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

    res.status(404).send(message);

    return;
  }

  res.send(book);
}

module.exports = putBook;
