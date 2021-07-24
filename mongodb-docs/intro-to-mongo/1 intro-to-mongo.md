## Introduction to mongodb
1. Written in C++.
2. First create a directory for saving the data say `/data/db`
3. Create a `db.conf` file  
```config
dbpath=/usr/local/var/mongodb
logpath=/usr/local/var/log/mongodb/mongo-server.log
```
4. Run mongo db using `mongod --config ~/mongodb_macos/config.conf`
5. MongoDB as a service `mongod -f ~/mongodb_macos/config.conf --install`
6. If mongod daemon is running at localhost so run `mongo`
7. Switch to different database `use database_name`
8. `show dbs`, `help`