const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sessionRouter = require('./src/routers/sessionRouter');
const adminRouter = require('./src/routers/adminRouter');


const app = express();
app.use(morgan('combined')); // tiny
app.use(express.static(path.join(__dirname + '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.render("index", {"title": "Abrar Khan", "data": ['a', 'b', 'c']});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    debug(`Server is started ${chalk.green(PORT)}`);
});