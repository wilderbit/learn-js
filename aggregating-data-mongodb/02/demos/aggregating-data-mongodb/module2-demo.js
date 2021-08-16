// First run mongoimport -d pluralsight -c rent --file newyork-rent.csv --type csv --headerline --drop

// Run a query to get a feeling of the collection:

db.rent.findOne({_id: new ObjectId("5e8936cf6347c0057a0563c7")}, {name:1, neighbourhood_cleansed:1, host_response_rate:1, price:1, cleaning_fee: 1})

// To query over price, we need to transform it to numerical!

// First attemp: Converting literally:

db.rent.aggregate([
    {
        $project: {
            price: { $toDouble: "$price" }  
        }
    }
])

// Ohoh! "Failed to parse number '$100.00' in $convert with no onError value: Did not consume whole number.",

// Lets try to remove those nasty $! We know how to do this!

// Second attempt: Converting literally from the substring

db.rent.aggregate([
    {
        $project: {
            price: { $toDouble: { $substr: [ "$price", 1, -1 ]} }  // Removes the first character!
        }
    }
])

// Ohoh! "Failed to parse number '2,000.00' in $convert with no onError value: Did not consume whole number.",

// Third attempt: Trying to trim out the ',' 

// Somehow we need to remove that ','! Lets try to split those and remove it :) 

db.rent.aggregate([
    {
        $project: {
            num_price: {
                $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
            }
        }
    }
])

// But, we aren't seeing the 2,000! Lets filter those out to debug!

db.rent.aggregate([
    {
        $match: {
            price: "$2,000.00"
        }
    },
    {
        $project: {
            num_price: {
                $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
            }
        }
    }
])

// Note that the match stage needed to be BEFORE the project, because AFTER the project stage, the price field did not exist!

// Maybe we can concat those! But concat recieves strings, so we need to reduce that array. 

// Fourth attempt: Reducing the generated array

db.rent.aggregate([
    {
        $match: {
            price: "$2,000.00"
        }
    },
    {
        $project: {
            num_price: {
                $reduce: {
                    input: {
                        $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
                    },
                    initialValue: '',
                    in: {
                        $concat: ['$$value', '$$this']
                    }
                }
            }
        }
    }
])

// Now it looks awesome, lets do it!


db.rent.aggregate([
    {
        $project: {
            num_price: {
                $toDouble: {
                    $reduce: {
                        input: {
                            $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
                        },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            }
        }
    }
])

// Awesome putting everything together:

db.rent.aggregate([
        {
            $project: { 
                name: 1,
                neighbourhood: "$neighbourhood_cleansed",
                minimum_nights: 1,
                maximum_nights: 1,
                num_price: {
                    $toDouble: {
                        $reduce: {
                            input: {
                                $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
                            },
                            initialValue: '',
                            in: {
                                $concat: ['$$value', '$$this']
                            }
                        }
                    }
                },
                num_clean_fee: {
                    $toDouble: {
                        $reduce: {
                            input: {
                                $split: [{ $substr: [ "$cleaning_fee", 1, -1 ]}, ',']
                            },
                            initialValue: '',
                            in: {
                                $concat: ['$$value', '$$this']
                            }
                        }
                    }
                }
            }
        }
    ])

// Ufff we need to ensure there are no empty strings since we are doing a substring operation!

db.rent.aggregate([
    {
        $match: {
            $and: [
                {price: {$exists : true} },
                {price: {$ne: ''} },
                {cleaning_fee: {$exists : true} },
                {cleaning_fee: {$ne: ''} },
            ]
        }
    },
    {
        $project: { 
            name: 1,
            neighbourhood: "$neighbourhood_cleansed",
            minimum_nights: 1,
            maximum_nights: 1,
            num_price: {
                $toDouble: {
                    $reduce: {
                        input: {
                            $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
                        },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            },
            num_clean_fee: {
                $toDouble: {
                    $reduce: {
                        input: {
                            $split: [{ $substr: [ "$cleaning_fee", 1, -1 ]}, ',']
                        },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            }
        }
    }
])

// Ok, lets add the extra night with the addFields stage and lets match the requirements of price between 100 and 200 and cleaning fee below 100!

db.rent.aggregate([
    {
        $match: {
            $and: [
                {price: {$exists : true} },
                {price: {$ne: ''} },
                {cleaning_fee: {$exists : true} },
                {cleaning_fee: {$ne: ''} },
            ]
        }
    },
    {
        $project: { 
            name: 1,
            neighbourhood: "$neighbourhood_cleansed",
            minimum_nights: 1,
            maximum_nights: 1,
            num_price: {
                $toDouble: {
                    $reduce: {
                        input: {
                            $split: [{ $substr: [ "$price", 1, -1 ]}, ',']
                        },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            },
            num_clean_fee: {
                $toDouble: {
                    $reduce: {
                        input: {
                            $split: [{ $substr: [ "$cleaning_fee", 1, -1 ]}, ',']
                        },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            }
        }
    },
    {
        $addFields: {
            average_price: { $sum: [ { $multiply: [ "$num_price", 7 ]}, "$num_clean_fee" ] }
        }
    },
    {
        $match: {
            $and: [
                { num_price: { $gt : 100 } },
                { num_price: { $lt: 200 } },
                { num_clean_fee: { $lt: 100} }   
            ]
        }
    },
    {
        $sort: {
            num_price: -1,
            num_clean_fee: -1
        }
    },
    {
        $limit: 10
    }
])