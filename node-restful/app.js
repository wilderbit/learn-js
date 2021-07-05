var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

app.listen(PORT, () => {
    console.log("Running on PORT " + PORT)
});