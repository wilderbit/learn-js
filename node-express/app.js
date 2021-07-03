const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');



const app = express();
app.use(morgan('combined')); // tiny
app.use(express.static(path.join(__dirname + '/public/')));


app.get('/', (req, res) => {
    res.send("Hello from my app");
});


app.listen(3000, () => {
    debug(`Server is started ${chalk.green("3000")}`);
});