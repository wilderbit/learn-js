const MongoClient = require('mongodb').MongoClient;
const circulationRepo = require('./repo/circulationRepo')
const data = require('./circulation.json')
const assert = require('assert')

const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new MongoClient(url);

    try {
        await client.connect();

        const result = await circulationRepo.loadData(data);
        assert.equal(data.length, result.insertedCount);

        const getData = await circulationRepo.getData();
        assert.equal(data.length, getData.length);

        const filterData = await circulationRepo.getData({Newspaper: getData[4].Newspaper});
        assert.deepEqual(filterData[0], getData[4]);

        const limitData = await circulationRepo.get({}, 3);
        assert.equal(limitData.length, 3)

    } catch(err) {
        console.log(err);
    } finally {
        const admin = client.db(dbName).admin();
    //    console.log(await admin.serverStatus());
        await client.db(dbName).dropDatabase();
        console.log(await admin.listDatabases());
        client.close();
    }

}

main();
