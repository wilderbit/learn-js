#### What is NoSQL
NoSql = Not Only SQL


#### CAP Theorem
Consistency, Availability, Partition Tolerance

All the data in MongoDB is between `C` and `P`.

#### Types of NoSQL databases
- Relational Database
- Document Database (MongoDB, CouchDB, etc...)
- Key-Value Database (Redis and DynamoDB, etc...)
- Wide-Column Stores (Cassandra, HBase, etc...)
- Graph Databases - Stores data into Edges and Nodes.(Neo4J)

#### Advantage of Document Database
- Intuitive Data Model 
- Flexible Schema
- Universal JSON documents
- Query Data Anyway
- Also Supports ACID transactions
- Distributed and Scalable

#### Why to use MongoDB
- Open Source and Free(Community Ed)
- Document Database
- High Performance
- Rich Query Language
- High Availability
- Horizontal Scalability
- Multiple Storage Engine

#### SQL and MongoDB terms
- Databases <--> Databases
- Table <--> Collection
- Row <--> JSON/BSON Document
- Column <--> Field
- Index <--> Index


#### Mongo Basic CRUD
- db.collection.insertOne()
- db.collection.find()
- db.collection.updateOne()
- db.collection.deleteOne()

#### Create Operation
- db.collection.insertOne()
- db.collection.insertMany()

- All write operations are atomic on the level of single document.
- If the collection does not exist, so insert operation will automatically create it.
- If an insert operation omits the _id field, the mongoDB driver will automatically 
  generate an ObjectId for _id field.
  
#### Connect to Database

`mongo "mongodb+srv://cluster0.szltw.mongodb.net/myFirstDatabase" --username wilderbit --password <password>`

Current DB  `db` 

Show all dbs `show dbs`

Create and use Database `use demonew`

Create collection `db.createCollection("newusers")`

Show Collections `show collections`

Insert Into Collection

```
db.newusers.insertOne(
  {
    "DisplayName":"Abrar Khan",
    "UserName":"wilderbit",
    "Job":{
      "profile":"SDE",
      "profecient":"Programmer",
      "Expert":"Java",
      "PrgrammingLanguages":["Html","JS","Node","Rust","Java","Python"]
    },
    "isManager":false
  })
```

#### Find the data

```
db.newusers.find({}).pretty()
```

#### Insert Many

```
db.newusers.insertMany([{"name": "Abrar Khan"}, {"name": "Abrar Tyagi"}])
```


## Retrieving Objects 

`db.collection.find()`

- Find method supports many query operators to filter data.
    - Comparison
    - Logical
    - Element
    - Evaluation
    - Geospatial
    - Array
    - Bitwise

- Query Projection
  - Specifies the fields to return to the document that matches the query filter.
  - 1 or true means include the field
  - 0 or false means exclude the field

#### Read Concern
- Allows to control the consistency and isolation properties of the data read
  from replica sets and replica sets shards
  - Local
  - Available
  - Majority
  - Linearizable
  - Snapshot  
  
#### Find Queries Compass
1. `{runtime: {$eq: 11}}` or `{runtime: 11}`
2. `{runtime: {$gt: 11}}`, `{runtime: {$lt: 11}}`, `{runtime: {$lte: 11}}`
3. Array Queries `{cast: "Billy Bletcher"}`
4. Object Queries `{"awards.wins": {$gte: 3}}`
5. And Query `{$and: [{"runtime": {"$gte": 70}}, {"awards.wins": {$gte: 3}}]}`
6. Or Query `{$or: [{"runtime": {"$gte": 70}}, {"awards.wins": {$gte: 3}}]}`

#### Find Queries Terminal
1. `db.movies.find({})` or `db.movies.find({}).pretty()` and type `it` for more documents
2. `db.movies.find({"runtime": 11}).pretty()`
3. `db.movies.find({"runtime": 11}).limit(10).pretty()`
4. `db.movies.find({"runtime": 11}, {runtime: 1, title: 1, _id: 0}).limit(10).pretty()`
5. `db.movies.find({"runtime": 11}, {runtime: 1, title: 1, _id: 0}).limit(10).sort({title: 1}).pretty()`
6. `db.movies.find({"runtime": 11}, {runtime: 1, title: 1, _id: 1}).limit(10).sort({title: 1, id: -1}).pretty()`
7. `db.movies.find({"runtime": 11}, {runtime: 1, title: 1, _id: 1}).limit(10).sort({title: 1, id: -1}).pretty().readConcern('linearizable')`
8. `db.movies.find({"runtime": 11}, {runtime: 1, title: 1, _id: 1}).limit(10).sort({title: 1, id: -1}).pretty().readConcern('linearizable').maxTimeMS(1000)
   `