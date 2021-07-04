const express = require('express');
const debug = require('debug')('app:authRouter');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

authRouter.route('/signUp').post((req, res) => {
    let {username, password} = req.body;
    const url = "mongodb+srv://wilderbit:066WElDrFDMQgJaR@cluster0.szltw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const dbName = "globomantics";

    (async function createUser(){
        let client;
        try {
            client = await MongoClient.connect(url)
            let db = client.db(dbName)
            const user = {username, password};
            let result =  await db.collection('users').insertOne(user);
            req.login(result.ops[0], () => {
                res.redirect('/auth/profile');
            });

        } catch(err) {
            debug(err)
        }
        client.close();

    }());

});

authRouter.route('/signIn').get((req, res) => {
    res.render('signin');
});

authRouter.route('/signIn').post(passport.authenticate('local', {
    successRedirect: '/auth/profile',
    failureMessage: '/'
}));

authRouter.route('/profile').get((req, res) => {
    res.send(req.user);
});

module.exports = authRouter;
