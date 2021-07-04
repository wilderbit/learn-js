const express = require('express');
const sessionData = require('../data/sessions.json')

const sessionRouter = express.Router();

sessionRouter.route('/')
    .get((req, res) => {
        res.render("sessions", { sessions: sessionData, });
    });

sessionRouter.route('/:sessionID')
    .get((req, res) => {
        let id = req.params.sessionID;
        res.render('session', { session: sessionData[id]})
    });

module.exports = sessionRouter;