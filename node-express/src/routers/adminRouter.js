const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');
const sessionData = require('../data/sessions.json')

const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {
    const url = "mongodb+srv://wilderbit:066WElDrFDMQgJaR@cluster0.szltw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const dbName = "globomantics";
    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('connected to database');
            const db = client.db(dbName);
            const response = await db.collection("sessions").insertMany(sessionData);
            res.json(response);
            client.close();
        } catch(err) {
            debug(err.stack);
        }

    }());
});

module.exports = adminRouter;
