## Start a MongoDB Instances

#### First Instance  
`mongod --dbpath /data/db --replSet "rs0" --port 27017`

`--replSet` --> Name of the replica set


#### Second Instance
`mongod --dbpath /data/db1 --replSet "rs0" --port 27018`

#### Third Instance
`mongod --dbpath /data/db2 --replSet "rs0" --port 27019`


## Connecting Nodes
Call `mongo` that will by default connect to `27017`

After that call `rs.initiate()` with all the servers

```
rs.initiate({
    _id: "rs0",
    members: [
        {_id: 0, host: "localhost:27017"},
        {_id: 2, host: "localhost:27018"},
        {_id: 3, host: "localhost:27019"},
    ]
})
```

Or you can achieve the same with `rs.add()` method as `rs.add("localhost:27018") and rs.add("localhost:27019")`

## Using db.isMaster()
It will tell the information about all the replicas, which node is primary, which node we are connected to.
If you need more information about replica itself use `rs.status()`. 

## Start mongod with file config

Config File
```
dbpath=/usr/local/var/mongodb
logpath=/usr/local/var/log/mongodb/mongo.log
port=27018
replSet=0
```

Run the Server

`mongod --config <config file name>`


## Data Durability in Replica Sets

#### Setting up a database
```
use blog
db
db.createCollection("users")
db.users.insert({"name" : "Nikola Zivkovic", "blog" : "rubikscode.net", "numberofArticles" : 10, "company" : "Vega IT"})
db.users.find().pretty();
```

## Limitations of Replica Sets

All write operations goes through the primary node, which makes it the bottleneck of the system.

#### Scaling
- Vertical Scaling :- By Increasing the RAM or processors of the single machine.
- Horizontal :- This method dividing data and loading into multiple servers.

#### Sharding

Horizontal scaling in MongoDb is done by `sharding`.  Sharding is done on a collection level.
This means that defined collection distributed among shards, not the whole database, and that
is done by calling method.

``sh.shardCollection("DATABASE_NAME.COLLECTION_NAME", SHARD_KEY)``