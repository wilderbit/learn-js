const express = require('express');

const app = new express();

app.get('/', (_req, res) => {
    res.send(`<h1>React is awesome</h1>`)
});

app.listen(7777, () => {
    console.log("server started")
})


