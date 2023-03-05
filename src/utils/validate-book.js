const Joi = require('joi');

function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    author: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(book);
}

module.exports = validateBook;
