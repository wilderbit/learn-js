const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        }, (username, password, done) => {

            const url = "mongodb+srv://wilderbit:066WElDrFDMQgJaR@cluster0.szltw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
            const dbName = "globomantics";

            (async function validateUser(){
                let client;
                try {
                    client = await MongoClient.connect(url)
                    let db = client.db(dbName);
                    let user =  await db.collection('users').findOne({username});
                    if (user && user.password === password) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }

                } catch (error){
                    done(error, false);
                }
                client.close();
            }());
        }));
}