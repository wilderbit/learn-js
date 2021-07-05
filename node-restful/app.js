const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const PORT = process.env.PORT || 3000;
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {

    const query = {};
    if(req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
        if(err) {
          return res.send(err);
        }
        return res.json(books)
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
