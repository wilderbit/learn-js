const express = require('express');
const sessionData = require('../data/sessions.json')
const debug = require('debug')('app:sessionRouter');
const { MongoClient, ObjectID } = require('mongodb');
const sessionRouter = express.Router();

sessionRouter.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/signIn')
    }
});

sessionRouter.route('/')
    .get((req, res) => {
        const url = "mongodb+srv://wilderbit:066WElDrFDMQgJaR@cluster0.szltw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        const dbName = "globomantics";
            (async function mongo() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug('connected to database');
                    const db = client.db(dbName);
                    const sessions = await db.collection("sessions").find().toArray();
                    res.render("sessions", { sessions });
                    client.close();
                } catch(err) {
                    debug(err.stack);
                }

            }());
    });

sessionRouter.route('/:sessionID')
    .get((req, res) => {
        let id = req.params.sessionID;

        const url = "mongodb+srv://wilderbit:066WElDrFDMQgJaR@cluster0.szltw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        const dbName = "globomantics";
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('connected to database');
                const db = client.db(dbName);
                const session = await db.collection("sessions").findOne({_id: ObjectID(id)});
                res.render("session", { session, });
                client.close();
            } catch(err) {
                debug(err.stack);
            }

        }());
    });

module.exports = sessionRouter;