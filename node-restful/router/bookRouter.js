const express = require('express');
const booksController = require('../controller/bookController');

function routes(Book) {
    const bookRouter = express.Router();
    const controller = booksController(Book);
    bookRouter.route('/books')
      .post(controller.post)
      .get(controller.get);

    bookRouter.use('/books/:bookID', (req, res, next) => {
      Book.findById(req.params.bookID, (err, book) => {
          if(err) {
            return res.send(err);
          }
          if(book) {
            req.book = book;
            return next();
          }
          return res.sendStatus(404);
      });
    });
    bookRouter.route('/books/:bookID')
      .get((req, res) => {
         return res.json(req.book)
      })
      .put((req, res) => {
        let book = req.book;
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.read = req.body.read;
        book.save((err) => {
            if(err) {
              return res.json(err);
            }
            return res.json(book);
        });
      })
      .patch((req, res) => {
        let book = req.book;
        if (req.body._id) {
          delete req.body._id;
        }
        Object.entries(req.body).forEach((item) => {
          const key = item[0];
          const value = item[1];
          book[key] = value;
        });
        book.save((err) => {
            if(err) {
              return res.json(err);
            }
            return res.json(book);
        });
      })
      .delete((req, res) => {
        req.book.remove((err) => {
          if(err) {
           return res.send(err);
          }
          return res.json(req.book);
        })
      });

    return bookRouter;
}

module.exports = routes;