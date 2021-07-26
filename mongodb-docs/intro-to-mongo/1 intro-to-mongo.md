## Introduction to mongodb
1. Written in C++.
2. First create a directory for saving the data say `/data/db`
3. Create a `db.conf` file  
```config
dbpath=/usr/local/var/mongodb
logpath=/usr/local/var/log/mongodb/mongo.log
port=27017
replSet=0

```
4. Run mongo db using `mongod --config ~/mongodb_macos/config.conf`
5. MongoDB as a service `mongod -f ~/mongodb_macos/config.conf --install`
6. If mongod daemon is running at localhost so run `mongo`
7. Switch to different database `use database_name`
8. `show dbs`, `help`

## Replica Set
- Primary DB(Any all the clients write using Primary)
- Secondary DB(These are read-only replicas)
- Arbiter DB(It's a tie breaker), If we have an odd number of secondary machines that we don't need the arbiter

## Configure a replica set
- Create three different directory

#### Start First Instance
`mongod --dbpath /data/db --replSet "rs0" --port 27017`

`--replSet` --> Name of the replica set


#### Start Second Instance
`mongod --dbpath /data/db1 --replSet "rs0" --port 27018`

#### Start Third Instance
`mongod --dbpath /data/db2 --replSet "rs0" --port 27019`

#### Connect Shell 
- mongo --port <port number>
- `db.getMongo()` for getting the instance information
- replica set config 
- 
```
rs.initiate({
    _id: "rs_demo",
    members: [
        {_id: 0, host: "localhost:27017", "priority": 10},
        {_id: 2, host: "localhost:27018"},
        {_id: 3, host: "localhost:27019", "arbiter": true},
    ]
})
```
- For Re-config `rs.reconfig(rs.config(),{force:true})` 
- Use this for read data from secondary node `db.setSecondaryOk()`
- Use for replica status `rs.status()`

## The Mongo Shell
- Eval command `mongo localhost/admin --eval "printjson(db.runCommand({logRotate: 1}))"` 
- We can run scripts as well `mongo userCount.js`
- 

#### Executing script before enter
```js
DB.prototype.dropDatabase = function () {
    print("Don't do it man!")
}

db.dropDatabase = DB.prototype.dropDatabase;
```

Running Script with shell
```js
mongo safer.js --shell
```

#### External Editor
- Complex scripts can use a big-boy editor.
- Wire up the shell to use your favorite editor.
- Set the editor into environment variable into `EDITOR` variable.
- And the run edit command of inside mongo shell
```js
let stuff = function () {}
edit stuff
```
#### Load the script inside the mongo shell
- `load('safer.js')`

#### User RC file
- Create `.mongorc.js` file
- When we run `mongo` this file will get automatically loaded
- If you don't want to run any RC file then run `mongo --norc`


#### Prevent Disaster

Sample `.mongrc.js`
```js

const _no_ = function () {
    print("Nope!!!")
} 

DB.prototype.dropDatabase = _no_;
db.dropDatabase = db.prototype.dropDatabase;

DB.prototype.shutdownServer = _no_;
db.shutdownServer = db.prototype.shutdownServer;
```

## Saving Data
- db.foo.save({})
- db.foo.insert({})
- db.foo.find()

#### Update
- db.foo.update(query, update, options);
- db.foo.update({_id: 1}, {$inc: {x : 1}})
- db.foo.update({_id: 1}, {$set: {x : 1}})
- db.foo.update({_id: 1}, {$unset: {y : ''}})
- db.foo.update({_id: 1}, {$rename: {y : 'Name'}})
- db.foo.update({_id: 1}, {$push: {things : 'One'}}) // Add an array into existing Object
- db.foo.update({_id: 1}, {$addToSet: {things : 'Two'}})
- db.foo.update({_id: 1}, {$pop: {things : 1}}) // Remove Last element from array
- db.foo.update({_id: 1}, {$pop: {things : -1}}) // Remove Last element from array
- db.foo.update({}, {$push: {things : 'One'}}) // Only One will be updated
- db.foo.update({}, {$push: {things : 'One'}}, {multi: true}) // Multiple will be updated
- db.foo.update({things: 'One'}, {$push: {things : 'One'}}, {multi: true}) // Only will be updated which contains 'One' in the array
- db.foo.findAndModify()

#### Finding Documents
- db.foo.find(query, projection)
- db.animals.find({_id: 1})
- db.animals.find({_id: {$gt: 5}})
- db.animals.find({_id: {$lt: 5}})
- db.animals.find({_id: {$lte: 5}})
- db.animals.find({_id: {$lte: 5, $gt: 1}})
- db.animals.find({_id: {$not: {$lte: 5}}})
- db.animals.find({_id: {$in: [1, 3]}})
- db.animals.find({_id: {$nin: [1, 3]}})
- db.animals.find({"info.canFly": {$exists: true}})
- db.animals.find({"info.canFly": {$exists: false}})
- db.animals.find({"info.canFly": null})
- db.animal.find({tags: 'cute'}, {name: 1, "info.type": 1})
- var c = db.animal.find({}) // cursor
- c.size()
- c.hasNext()
- c.forEach(d => d.name)
- db.animal.find({}).sort({name: 1}) // Sorting by name ascending
- db.animal.find({}).sort({name: 1}) // Sorting by name descending
- db.animal.find({}).sort({name: 1}).limit(3) // limit
- db.animal.find({}).sort({name: 1}).limit(3).skip(3) // paging
- db.animal.findOne() // find One


#### Indexing