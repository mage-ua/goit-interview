require('dotenv').config();

const express = require('express');
const cors = require('cors');
const initMongo = require('./database');
const {
  getBooks,
  getBookById,
  postBook,
  putBook,
  deleteBook,
} = require('./handlers/books');

const appName = process.env.APP_NAME || 'my-app';
const port = process.env.PORT || 3000;

(async () => {
  try {
    console.log(`Starting ${appName}...`);

    await initMongo();

    const app = express();

    // <=========== MIDDLEWARES =============>
    app.use(cors());
    app.use(express.json());
    // </=========== MIDDLEWARES =============>

    // <=========== HANDLERS =============>
    app.get('/api/books', getBooks);
    app.get('/api/books/:id', getBookById);
    app.post('/api/books', postBook);
    app.put('/api/books/:id', putBook);
    app.delete('/api/books/:id', deleteBook);
    // </=========== HANDLERS =============>

    app.listen(port, () => console.log(`Listening on port ${port}.`));
  } catch (error) {
    console.log(error);
  }
})();
