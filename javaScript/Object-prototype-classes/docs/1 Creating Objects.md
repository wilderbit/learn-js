# Creating and using JavaScript Object
There are three ways:-
- Object Literal
- Constructor Function
- Classes

#### Object Literal

```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan'
}
```

#### Dynamic Nature on Object
```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan'
}

person.age = 29;
```

#### Adding Function to an Object
```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan'
}
person.age = 29;

person.isAdult = function () { return this.age >= 18}
```
OR 

```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult: function () { return this.age >= 18}
}
```
OR 

```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult() { return this.age >= 18}
}
```

#### Property shorthand
```js
function registerUser(firstName, lastName) {
    let person = {firstName, lastName};
}
```

#### Inspect Object Properties
```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult() { return this.age >= 18}
}

Object.keys(person)

for(let propertyName in person) {
    console.log(propertyName)
}
```

#### JavaScript Object Equality
- `==` Not Type safe, `"42" == 42`, `0 == false`, `null == undefined`, `"" == 0`, `[1, 2] == "1,2"` 
- `===` Type-safe, convenient/concise, `NaN is not equal to NaN` `+0 equal to -0`
- `Object.is()` Type-safe, verbose, `NaN is equal to NaN`, `+0 does not equal to -0`
- In case of Object equality operators works on address and in case of string literal check the values.

#### Object Assign and Immutability

```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult() { return this.age >= 18}
}

let person2 = {}

Object.assign(person2, person) // person will get copied into person2 Object
```

#### Merging Objects


```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult() { return this.age >= 18}
}

let healthStats = {
    height: 168,
    weight: 150,
}

Object.assign(person, healthStats) // person will get copied into person2 Object
```

#### Merged with Immutability
```js
  let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult() { return this.age >= 18}
  }

  let healthStats = {
    height: 168,
    weight: 150,
  }

  function mergedObject(person, healthStats) {
    return Object.assign({}, person, healthStats)
  }

  let m = mergedObject(person, healthStats)
```

#### Constructor Function
```js

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function () { return this.age >= 18 }
}

let person = new Person('Abrar', 'Khan', 27)

```

#### Object creation using Object.create
```js

let newPerson = Object.create(
    Object.prototype,
    {
        firstName: {value: 'Abrar', enumerable: true, writeable: true, configurable: true},
        lastName: {value: 'Abrar', enumerable: true, writeable: true, configurable: true},
        age: {value: 29, enumerable: true, writeable: true, configurable: true},
    }
)

```

## JavaScript Object Properties
- We can use brackets to access the object properties
```js

let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29
}

for(let propertyName in person) {
    console.log(propertyName + ' ' + person[propertyName])
}
```

- Every property has property descriptor

```js

let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29
}

console.log(Object.getOwnPropertyDescriptor(person, 'firstName'))
// writable, enumerable, configurable
```

- `writeable` means whether the property is writeable or not

```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29
}
Object.defineProperty(person, 'firstName', {writeable: false})
person.firstName = 'Kris'; // It will throw an error now
```

- If we make an object writeable false then we will be able to change it properties 
```js
let person = {
    name: {
        firstName: 'Abrar',
        lastName: 'Khan',  
    },
    age: 29
}
Object.defineProperty(person, 'name', {writeable: false})
person.name.firstName = 'Kris'; // It will work fine
```

- Object.freeze() will make object Immutable

```js
let person = {
    name: {
        firstName: 'Abrar',
        lastName: 'Khan',  
    },
    age: 29
}
Object.freeze(person.name)
person.name.firstName = 'Kris'; // It will throw an error
```

- `enumrable` means whether the property will get enumerated or not
```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29
}

Object.defineProperty(person, 'firstName', {enumrable: false});

for(let propertyName in person) {
    console.log(propertyName + ' ' + person[propertyName]) // firstName will get printed
} 

console.log(Object.keys(person)) // firstName will not show up
JSON.stringify(person) // firstName will not show up

person.firstName // It will print the value

```

- `configurable` set the property to become configurable or non-configurable.
```js
let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29
}
Object.defineProperty(person, 'firstName', {configurable: false});
Object.defineProperty(person, 'firstName', {enumrable: false}); // It will throw an error
Object.defineProperty(person, 'firstName', {configurable: true}); // We can not even do this
```

- Creating property Getters and Setters
```js

let person = {
    name: {
        firstName: 'Abrar',
        lastName: 'Khan',  
    },
    age: 29
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.name.firstName + ' ' + this.name.lastName;
    },
    set: function (value) {
        let nameParts = value.split(' ');
        this.name.firstName = nameParts[0];
        this.name.lastName = nameParts[1];
    }
})

console.log(person.fullName) // Abrar Khan
person.fullName = 'Jim Cooper'
console.log(person.fullName) // Jim Cooper
```
