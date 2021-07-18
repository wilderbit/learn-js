// Switch statement
// Switch uses strict comparison
/*
switch(<exp>) {
    case <exp>:
        // Statements
        break;
    default:
        // Statements
}
 */

// For in Statement
console.log("forInSample")
function forInSample() {
    let product = {
        id: 12,
        name: "asdasdfas",
        number: "asdasf",
        color: "sadasdf",
        cost: 1234.32141,
        listPrice: 123423.4123,
        calculateGrossProfit: function () {
            return this.listPrice - this.cost;
        }
    }

    for (const key in product) {
        console.log(`${key} = ${product[key]}`);
    }

    let str = "Hey my name is Abrar Khan";
    let letters = "";
    for(const index in str) {
        letters += str[index]
    }
    console.log(letters)
}
forInSample();
console.log("forInSampleEnd")

// For/of Statement
console.log("forOfSample")

function forOfSample() {
    let product = [
        {
            id: 12,
            name: "asdasdfas",
            number: "asdasf",
            color: "sadasdf",
            cost: 1234.32141,
            listPrice: 123423.4123,
        },
        {
            id: 12,
            name: "asdasdfas",
            number: "asdasf",
            color: "sadasdf",
            cost: 1234.32141,
            listPrice: 123423.4123,
        }
    ]

    for (const item of product) {
        console.log(JSON.stringify(item))
    }

    let str = "Hey my name is Abrar Khan";
    let letters = "";
    for(const char of str) {
        letters += char
    }
    console.log(letters)
}
forOfSample();
console.log("forOfSampleEnd")


// Exception handling
console.log("\n\ntryAndCatch")

try {
    let x = 100;
    let result = x / 10;
    console.log(result)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("In the finally block")
}

// Throw the error
function throwError() {
    try {
        attemptDivision();
    } catch (error) {
        console.log(`${error.message} - Error Type: ${error.name}`)
    }
}

function attemptDivision() {
    let result;
    try {
        result = x / 10;
    } catch(error) {
        console.log(error.message)
        throw {
            'message': "In the attemptDivision() method error occurred: " + error.message,
            'name': "CustomError"
        }
    }
}

throwError();

// Types of Error
// ReferenceError, RangeError, TypeError, URIError, SyntaxError, EvalError

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log(`Reference error ${error.message}`)
            break;
        case 'RangeError':
            console.log(`Range error ${error.message}`)
            break;
        case 'TypeError':
            console.log(`Type error ${error.message}`)
            break;
        case 'URIError':
            console.log(`URI error ${error.message}`)
            break;
        case 'SyntaxError':
            console.log(`Syntax error ${error.message}`)
            break;
        case 'EvalError':
            console.log(`Eval error ${error.message}`)
            break;
        default:
            console.log(`ErrorType - ${error.name} - ErrorMessage - ${error.message}`)
            break;
    }

}


// How to determine JavaScript Variable Data Types
console.log("\n\nHow to determine JavaScript Variable Data Types")

// typeof operator
// Data Type:- boolean, null, undefined, number, string
// Object Data Types:- new Array, new Error, new Function, new Object, new RegExp, new Boolean, new Number, new String

console.log(typeof "")
console.log(typeof 4)
console.log(typeof (4 * 3))
console.log(typeof {})
console.log(typeof (new Date()))
console.log(typeof ([]))
console.log(typeof null)
console.log(typeof console.log)

// Constructor Property
console.log("\nConstructor Property")
console.log([].constructor.toString())
console.log((new Date()).constructor.toString())
console.log(false.constructor.toString())
console.log(Number(3).constructor.toString())

// instanceof Operator
console.log("\ninstanceof Operator")
console.log(new String("instanceof Operator") instanceof String)
console.log("instanceof Operator" instanceof String) // Primitives are not Objects
console.log(new Date() instanceof Date)
console.log(new Date() instanceof Object)

function Product(id, name, number) {
    this.productID = id;
    this.name = name;
    this.number = number;
}

let product = new Product(1, "Abrar", 12345)
console.log(product instanceof Product)
console.log(product instanceof Object)

// Understanding this
console.log("\n\nUnderstanding this")
console.log("------------------")

// this always refers to an object

console.log(this.toString())

// this have different values based on execution context
// In a method this refers to the owner object
// In a function: global object
// In an event: element that received the event
// call()/apply() methods refers to object passed in
// use strict also affects `this`
// constructor functions owner is `this`