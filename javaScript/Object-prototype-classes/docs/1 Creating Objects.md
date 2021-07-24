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
