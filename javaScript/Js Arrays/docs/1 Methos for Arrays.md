## Working with Arrays

#### Create an array of list of args
```js
Array.of(12, 9, 3)
```

#### Using the spread operator
```js

function add(a, b, c) {
    return a + b + c;
}

let m = [1,2,4]
add(...m) // 6
```

#### Using Array.find and findIndex to find a value
```js
function findOver1000() {
    let monthlySales = Array.of(10000,20000,30000);
    let first = monthlySales.find(element => element > 1000); // Return element
    let firstLocation = monthlySales.findIndex(element => element > 1000); // Return location
}
```

## Working with Sets
