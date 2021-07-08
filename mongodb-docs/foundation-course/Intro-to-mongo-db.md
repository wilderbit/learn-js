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