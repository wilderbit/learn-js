const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const PORT = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./router/bookRouter')(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
