// const express = require('express');
import express from 'express';
import { readFileSync } from 'fs';

const app = new express();

app.use(express.static("dist"));

app.get('/', (_req, res) => {
    let index = readFileSync('public/index.html', 'utf-8');
    res.send(index);
});

app.listen(7777, () => {
    console.log("server started")
})


