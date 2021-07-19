#### Function

- https://jscomplete.com/playground/arrow-vs-regular-functions

```js
const X = function() {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y
  // It's the same "this" found in Y's scope
};

/*
  
  Regular functions give access to their "calling" environment while arrow functions give access to their "defining" environment 
  
  
  The value of the "this" keyword inside a regular function depends on HOW the function was CALLED (the OBJECT that made the call).
  
  The value of the "this" keyword inside an arrow function depends on WHERE the function was DEFINED (the SCOPE that defined the function).
  
  */

// console.log(this);

const testerObj = {
  func1: function() {
    console.log('In func1', this);
  },

  func2: () => {
    console.log('In func2', this);
  }
};

testerObj.func1();
testerObj.func2();

// const square1 = (a) => {
// 	return a * a;
// };
// const square2 = (a) => a * a;
// const square3 = a => a * a;

display.log([1, 2, 3, 4].map(a => a * a));
```

#### Destructuring
https://jscomplete.com/playground/destructuring

#### Template String
https://jscomplete.com/playground/template-strings

#### Classes
https://jscomplete.com/playground/classes

#### Promise
https://jscomplete.com/playground/promises