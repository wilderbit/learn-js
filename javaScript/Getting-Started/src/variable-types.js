// Demo App
// https://github.com/bmaluijb/GetYourLoanApp/blob/master/scripts/site.js

// Template Literals
let name = "Abrar Khan"
let str = `My name is ${name}`

console.log(str)

// Redeclaration with let is not allowed in the same scope, let have the block scope

// Destructuring array and object
let arr = [1,2,3,4,5,6,7]

let [one, two, three, four] = arr;
console.log(one, two, three, four);

let [zero, ...more] = arr;
console.log(zero, more);

let obj = {
    name: 'Abrar',
    age: '27'
}

let {name: n, age} = obj;
console.log(n, age);