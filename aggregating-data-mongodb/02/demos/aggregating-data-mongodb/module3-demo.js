// Run first  mongoimport -d pluralsight -c zipcodes --drop --file zipcodes.json to load the data!

db.zipcodes.aggregate([
    { 
        $group: {
            _id: { 
                state: "$state", 
                city: "$city" 
            },
            pop: { 
                $sum: "$pop" 
            }
       }
    },
    { 
        $sort: {
            pop: 1
        }
    },
    {
        $group: {
            _id : "$_id.state",
            totalPop: { $sum: "$pop" },
            biggestCity:  { $last: "$_id.city" },
            biggestPop:   { $last: "$pop" },
            smallestCity: { $first: "$_id.city" },
            smallestPop:  { $first: "$pop" }
        }
    },
    {
        $project: {
            _id: 0,
            state: "$_id",
            totalPopulation: "$totalPop",
            biggestCity:  { 
                name: { $concat: [ {$substr: ["$biggestCity", 0, 1]}, {$toLower : {$substr: ["$biggestCity", 1, { $subtract: [{$strLenCP: "$biggestCity"}, 1] }  ]}}] },
                pop: "$biggestPop"
            },
            smallestCity: { 
                name: { $concat: [ {$substr: ["$smallestCity", 0, 1]}, {$toLower : {$substr: ["$smallestCity", 1, { $subtract: [{$strLenCP: "$smallestCity"}, 1] }  ]}}] },
                pop: "$smallestPop" 
            }
        }
    },
    {
        $sort: {
            totalPopulation: -1
        }
    }
])