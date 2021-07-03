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

        const limitData = await circulationRepo.getData({}, 3);
        assert.equal(limitData.length, 3)

        const byId = await circulationRepo.getById(getData[4]._id.toString());
        assert.deepEqual(byId, getData[4])

        const newItem = {
              "Newspaper": "My paper",
              "Daily Circulation, 2004": 1,
              "Daily Circulation, 2013": 2,
              "Change in Daily Circulation, 2004-2013": 100,
              "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
              "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
              "Pulitzer Prize Winners and Finalists, 1990-2014": 0
        };
        const addedItem = await circulationRepo.addItem(newItem);
        assert(addedItem._id)
        const addedItemQ = await circulationRepo.getById(addedItem._id.toString());
        assert.deepEqual(addedItemQ, addedItem);

        const updatedItem = await circulationRepo.update(addedItem._id,
            {
                  "Newspaper": "My new paper",
                  "Daily Circulation, 2004": 1,
                  "Daily Circulation, 2013": 2,
                  "Change in Daily Circulation, 2004-2013": 100,
                  "Pulitzer Prize Winners and Finalists, 1990-2003": 0,
                  "Pulitzer Prize Winners and Finalists, 2004-2014": 0,
                  "Pulitzer Prize Winners and Finalists, 1990-2014": 0
            }
        );

        assert.equal(updatedItem.Newspaper, "My new paper");
        const updateItem = await circulationRepo.getById(addedItem._id.toString());
        assert.equal(updateItem.Newspaper, "My new paper");

        const remove = await circulationRepo.remove(addedItem._id);
        assert(remove);

        const removedItem = await circulationRepo.getById(addedItem._id.toString());
        assert.equal(removedItem, null);


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
