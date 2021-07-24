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