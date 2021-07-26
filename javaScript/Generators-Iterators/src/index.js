// function myIterator(start, finish) {
//     let index = start;
//     let count = start;
//     return {
//         next() {
//             let res = {}
//             if(index < finish) {
//                 res = { value: index, done: false}
//                 index += 1;
//                 count += 1;
//                 return res
//             }
//             return {value: count, done: true }
//         }
//     }
// }

// let it = myIterator(0, 10)
// console.log(it)
// let result = it.next();
// while (!result.done) {
//     console.log(result.value)
//     result = it.next();
//}

// Array Iterator
// ---------------------
// const arr = [0, 3, 4 , 6];
// const it = arr[Symbol.iterator]();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// Map Iterator
// ------------------
// let map = new Map();
// map.set('Key 1', 'Value 1');
// map.set('Key 2', 'Value 2');
// let mapIt = map[Symbol.iterator]();
// console.log(mapIt.next())
// console.log(mapIt.next())
// console.log(mapIt.next())
//
// for (const [x, y] of map) {
//     console.log(`${x} and ${y}`)
// }

// Iterate Over JSON Data
// --------------------------
// const axios = require('axios')
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// readline.question("What would you like to log today?\n", async (item) => {
//     const { data } = await axios.get(`http://localhost:3001/food`);
//     let it = data[Symbol.iterator]();
//     let pos = it.next();
//     while(!pos.done) {
//         const food = pos.value.name;
//         if (item === food) {
//             console.log(`${item} has ${pos.value.calories} calories`)
//         }
//         pos = it.next()
//     }
//     readline.close();
// });