# Functions
A function is block of organized, reusable code that is used to perform a single, related action.

```js
function greetings(name) {
    console.log(name)
}
greetings('John')
```


## Arrow Functions
- Introduced in ES6
- Simpler way to write a function expression
- shorter syntax
- this derives its value from enclosing lexical scope
- Side Effect:- 
  - Behaviour of this keyword
  - No argument object
    
## `this` behaviour
- Refers to the owner of the function we are executing.
- Unlike regular functions, arrow functions do not have their own `this` value.

## `call` Method

```js
let person1 =  {name: 'John', age: 22};
let person2 =  {name: 'Miller', age: 26}

let sayHi = function () {
    console.log('Hi ' + this.name)
}

sayHi.call(person1) // Hi John
sayHi.call(person3) // Hi Miller
```

## `apply` Method

```js
// It is same as call method, one difference is apply take array input with similar elements
```

## `bind` Method

```js
let person1 = {
    name: 'Abrar',
    getName: function () {
        return this.name;
    }
}

let person2 = {name: 'John'}

let getNameCopy = person1.getName.bind(person2)
console.log(getNameCopy()) // John
```