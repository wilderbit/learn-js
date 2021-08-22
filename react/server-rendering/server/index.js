// const express = require('express');
import React from "react";
import express from 'express';
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import { App } from '../client/App'


const app = new express();

app.use(express.static("dist"));

app.get('/', (_req, res) => {
    let index = readFileSync('public/index.html', 'utf-8');
    const render = renderToString(<App/>)
    res.send(index.replace('{{render}}', render));
});

app.listen(7777, () => {
    console.log("server started")
})


