// Run first mongoimport -d pluralsight -c salaries --drop --file salaries.json to load the data!

// First lets write our budget per fiscal year and department to a new collection with merge

db.salaries.aggregate([
  {
    $group: {
      _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, 
      salaries: { $sum: "$salary" } 
    }
  },
  {
    $sort: { 
      "_id.fiscal_year" : 1
    }
  },
  {
    $merge: {
      into: {
        db: "pluralsight",
        coll: "budgets"
      }
    }
  }
])

// Lets verify that it got written!

db.budgets.find()

// But now our current headcount changed! Lets update our DB!

db.salaries.insertInto([
  { "_id" : 10001,  name: "Wren", dept: "IT", salary: 100000, fiscal_year: 2019 },
  { "_id" : 10002,  name: "Zebra", dept: "Engineering", salary: 150000, fiscal_year: 2019 },
  { "_id" : 10003,  name: "Alex", dept: "HR", salary: 125000, fiscal_year: 2019 },
  { "_id" : 10004,  name: "Sophie", dept: "IT", salary: 70000, fiscal_year: 2019 },
  { "_id" : 10005,  name: "Steiner", dept: "Finance", salary: 250000, fiscal_year: 2020 },
  { "_id" : 10006,  name: "Joseph", dept: "Engineering", salary: 112000, fiscal_year: 2020 },
  { "_id" : 10007,  name: "Sarah", dept: "HR", salary: 113000, fiscal_year: 2020 },
  { "_id" : 10008,  name: "headcount1", dept: "IT", salary: 150000, fiscal_year: 2021 },
  { "_id" : 10009,  name: "headcount2", dept: "Sales", salary: 100000, fiscal_year: 2021 },
  { "_id" : 100010,  name: "headcount3", dept: "Sales", salary: 80000, fiscal_year: 2021 }
])

// We need to recalculate our budgets!

db.salaries.aggregate( [
  { $match : { fiscal_year:  { $gte : 2019 } } },
  { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, salaries: { $sum: "$salary" } } },
  { $merge : { into: { db: "pluralsight", coll: "budgets" }, on: "_id",  whenMatched: "replace", whenNotMatched: "insert" } }
] )

// Now lets get another report on all the employees per year!

db.salaries.aggregate( [
  { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, employees: { $push: "$name" } } },
  { $project: { _id: 0, dept: "$_id.dept", fiscal_year: "$_id.fiscal_year", employees: 1 } },
  { $merge : { into : { db: "pluralsight", coll: "orgChart" }}}
] )

// If we look for Engineering in 2019 we see the employess!

db.orgChart.find({fiscal_year: 2019, dept: "Engineering"})

// Awesome, but again, we now have a change! Employee number 7000 decided to move to Engineering! We need to reupdate our orgChart collection!

db.orgChart.createIndex( { fiscal_year: 1, dept: 1 }, { unique: true } )

db.salaries.update({_id: 7000}, { $set: {dept: "Engineering", salary: 125000}})

// We look for her!

db.salaries.find({_id:7000})
// { "_id" : 7000, "dept" : "Engineering", "name" : "Jean Allen", "salary" : 125000, "fiscal_year" : 2019 } Success!

db.salaries.aggregate( [
  { $match: { fiscal_year: 2019 }},
  { $group: { _id: { fiscal_year: "$fiscal_year", dept: "$dept" }, employees: { $push: "$name" } } },
  { $project: { _id: 0, dept: "$_id.dept", fiscal_year: "$_id.fiscal_year", employees: 1 } },
  { $merge : { into : { db: "pluralsight", coll: "orgChart" }, on: [ "dept", "fiscal_year" ], whenMatched: "replace" } }
] )

// If we now check the new orgChart we see that jean is in the correct part!!

db.orgChart.find({employees: "Jean Allen", fiscal_year:2019})
// { "_id" : ObjectId("5e99a4b83be12efbe0fd108e"), "employees" : [ "Audrey Zukowski", "Manuel Gaston", "James Perkins", "Amanda Womack", "Bettina Darnell", "Sherry Banks", "Daniel Shafer", "Barbara Hester", "Pauline Torres", "Jewell Rocha", "Mary Walson", "Jeffery Hensley", "Cedric Treider", "Anthony Notice", "Derek Razo", "Richard Steller", "Leona Beddo", "Richard Masten", "Garnet Holt", "Santa Hasley", "James Marshall", "Theodore Leto", "Ira Macauley", "Karen Smith", "Robert Munroe", "Hazel Garcia", "Joseph Fields", "Rodney Delisle", "George Hauman", "Benjamin Vitale", "Vickie Boyce", "Stephen Suarez", "Anthony Adams", "Billy Love", "Bruce Obrien", "Jeffrey Elmore", "John Harris", "Martha Cass", "Anthony Brewer", "Scarlett Jones", "Susie Cuellar", "Kim Leary", "Jo Bielecki", "Chris Sule", "John Porter", "Anthony Waller", "Margaret Stout", "Allison Poundstone", "Robert Wright", "Linda Ledezma", "Conrad Parker", "Jessica Hollingsworth", "Don Lebron", "Warren Silver", "Rose Chaligoj", "Chad Kenny", "Robert Webster", "Essie Guerrero", "Willie Nelson", "Bob Ballard", "Theresa Garza", "Patricia Carlson", "Carl Ward", "Anthony Morgan", "Lawrence Polycarpe", "Gabriel Johnson", "Ernesto Robles", "Brian Dearing", "Anna Morgan", "John Konowal", "Alex Karasti", "Mark Evans", "Mark Jimenez", "Timothy Trahan", "David Johnson", "Mike Oxford", "Paul Silva", "Gary Giroux", "Ann Wilson", "Michele Darnell", "Kenneth Thomas", "Mercy Castillo", "Lonnie Brescia", "Bradley Urena", "Marian Hernandez", "Sharon Harmon", "Janelle Wilson", "Scott Sikes", "James Hoffman", "Greg Hollis", "Nicholas Grace", "Wendy Castillo", "William Stanton", "Ronald Glandon", "Thomas Brown", "Michael Davis", "Lee Degen", "Tinisha Sawyer", "Douglas Monterroso", "William Yates", "Mary Carter", "Daniel Compton", "Krista Almeida", "Kenny Wilkinson", "Vernon Mctiernan", "Shanda Bell", "Nettie Lai", "Virginia Stewart", "Adrian Kanady", "Danny Brooks", "David Crane", "Harley Denner", "Lola Hochstatter", "Richard Locke", "John Beltran", "Michael Berthiaume", "Esther Bales", "Rosemary Burgos", "Erika Heintz", "Mary Williams", "Hugh Corona", "Sean Roberts", "Idalia Salinas", "Morris Ford", "Donald Waller", "Carol Lorenzo", "Richard Doughty", "Carolyn Sellers", "Beatrice Strickland", "Mark Randles", "Patricia Amos", "Kathie Callender", "Rodney Schecter", "Terry Davis", "Norma Mcnamara", "Gary Korn", "Patrick Mathews", "Joseph Smith", "Regina Abeles", "Danielle Rauch", "Antonio Stapler", "Michael Brewer", "Steven Hoener", "James Brown", "Amanda Duncan", "Cynthia Boren", "Maryann Rush", "Matilde Brown", "Bessie Turner", "Carroll Thompson", "Kathleen Graham", "Dustin Webb", "Joann Williams", "Ashley Mcfaul", "Roger Lavadera", "William Guhl", "Dorothy Mulhern", "Karla Vanalst", "Fanny Pena", "Bertha Perrone", "Gary Crabtree", "Amanda Tomlin", "Louise Waldal", "Jeffery Lindholm", "Rose Kjar", "Adrian Burch", "Mary Collymore", "William Thome", "Ericka Keene", "Pedro Dube", "Leroy Olsen", "Michael Cameron", "Theresa Smith", "My Morton", "Christina Gildner", "Terrance Anders", "Theresa Standre", "Jesse Alvarez", "Keith Jones", "Paul Torres", "Devin Wise", "Paul Huston", "Ericka Hayes", "Jacqueline Stricklin", "Lee Weiss", "Lindsay Volo", "Harley Key", "Robert Price", "Brandon Hollingsworth", "Angelia Pensinger", "Sandra Dawkins", "Elizabeth Schrader", "Robert Wright", "Norma Croft", "Kassandra Malkani", "Kimberly Mills", "Marilyn Moll", "Ronald Bell", "Yolanda Bies", "Ethan Fawcett", "Sharon Leymeister", "Valerie Darden", "Paul Heath", "Rey Wright", "Albert Soders", "Joshua Ovalle", "Stephen Cathey", "John Perry", "Nicholas Williams", "Carl Tipka", "Larry Jacobs", "Marion Larson", "Joanne Albanese", "Ward Camacho", "Elizabeth Sweet", "Robert Mcdonald", "Felicia Reeves", "Jennifer Ferguson", "Reina Smith", "Juan Arrington", "Charles King", "Patricia Flinn", "Cheryl Curles", "Patrick Lewis", "Tonya Parson", "Bill Dyer", "William Perry", "Isabel Fowler", "Federico Yamamoto", "Robert Zamora", "Christina Pella", "Geraldine Walker", "Richard Talty", "Christina Mcqueen", "Mary Oliverio", "Candice Tamayo", "Joy Villagomez", "Carla Leon", "Alexander Rogers", "James Blackmon", "William Mullen", "Adam Covington", "Carol Carbajal", "Jason Haynes", "Karen Bowman", "Sean Holt", "Ginger Petrik", "Bridget Lee", "Sally Wofford", "Kenneth Chasse", "Judith Dexter", "Dollie Cadet", "Mary Adolphson", "Tonya Flynn", "Carlos Hamilton", "Robert Miller", "Whitney Patel", "Alfred Blevins", "Warren Craine", "Clarence Mcconnell", "Edgar Gillespie", "Martin Robinson", "Michelle Fisher", "Aaron Branchaud", "Everett Loiseau", "Debi Moravek", "Amanda Glahn", "Michael Bryan", "Michael Todd", "Jean Allen", "Andrew Moore", "Jonas Gonzales", "Dorothy Rex", "Bertha Whitacre", "Bertha Hall", "Mary Vroom", "Timothy Marshall", "Fred Mcqueen", "Kacey Mathers", "Tammy Jamili", "Jamie Whittier", "Roger Binger", "Barbara Horton", "Michael Dorado", "Talia Crockett", "Wilma Cordoba", "King Willick", "Kenny Woodward", "Eric Maher", "Phillip Devlin", "Jennifer Girdley", "Lillian Gordon", "Brandon Thompson", "Christopher Carpenter", "Tanna Maloney", "Lawrence Schillaci", "Thomas Stevens", "Carl Edgerton", "Clint Newton", "Steven Miller", "Keith Noble", "James Peiper", "Andrew Zirkle", "Jerome Stone", "Robert Hendricks", "James Whitley", "Joseph Lavergne", "Maria Maloney", "James Baylor", "Sandra Gonzalez", "Perry Walker", "David Beauregard", "Sandra Hammond", "Irene Simmons", "Mary Miles", "David Jones", "Dennis Madden", "Debroah Allen", "Roman Kanagy", "Patricia Calvin", "George Alexander", "Mary Baker", "Lorine Carlson", "Amanda Shaner", "Kelly Gross", "Sandy Tyler", "Philip Rigsby", "Todd Johnson", "Max Morris", "Dora Matthews", "Bruce Childress", "Tracey Willis", "Cynthia Efird", "Carole Hidvegi", "Warren Roy", "Kyle Edgehill", "Alan Durant", "Tanya Aniello", "Katie Lyle", "Dana Joseph", "Timothy Young", "John Ricci", "Sharon Trower", "Danielle Sills", "Goldie Cardenas", "Tammy Lewis", "Shani Olivo", "Ray White", "Manuela Masters", "William Lowell", "Norman Diaz", "Timothy Murrell", "Harry Cooks", "James Bennett", "Angelina Riney", "Lucille Robinson", "Wendy Hodges", "Amy Guzman", "Debra Hashim", "Suzanne Nault", "Maria Goodnight", "Terri Macleod", "Jeff Ford", "Sarah Gonzales", "Willie Dunstan", "Herbert Caldwell", "Alex Goodwin", "Kimberly Ramirez", "Robert Cooley", "Juana Voelker", "Dennis Arnold", "Erma Hartley", "Michael Worley", "Stacee Allen", "John Helbling", "Gertrude Kerrigan", "Kathy Espinosa", "Laticia Bell", "Tammy Nelson", "Dannie Sato", "Jim Morris", "Linda Moses", "Anna Bishop", "Deidre Frandsen", "Birdie Gorney" ], "dept" : "Engineering", "fiscal_year" : 2019 }
