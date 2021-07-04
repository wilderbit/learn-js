const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const sessionRouter = require('./src/routers/sessionRouter');
const adminRouter = require('./src/routers/adminRouter');
const authRouter = require('./src/routers/authRouter');


const app = express();
app.use(morgan('combined')); // tiny
app.use(express.static(path.join(__dirname + '/public/')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'secret'}));

require('./src/config/passport.js')(app)

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.render("index", {"title": "Abrar Khan", "data": ['a', 'b', 'c']});
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    debug(`Server is started ${chalk.green(PORT)}`);
});