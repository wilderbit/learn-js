const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sessionData = require('./src/data/sessions.json')
const sessionRouter = express.Router();


const app = express();
app.use(morgan('combined')); // tiny
app.use(express.static(path.join(__dirname + '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

sessionRouter.route('/')
    .get((req, res) => {
        res.render("session", { sessions: sessionData, });
    });

sessionRouter.route('/:sessionID')
    .get((req, res) => {
        res.send("Hello single Sessions")
    });


app.use('/sessions', sessionRouter);

app.get('/', (req, res) => {
    res.render("index", {"title": "Abrar Khan", "data": ['a', 'b', 'c']});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    debug(`Server is started ${chalk.green(PORT)}`);
});