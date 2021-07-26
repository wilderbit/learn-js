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
- Two type of Sets:- Set, and WeakSet
- Sets enable you to store unique values of any type, whether primitive values or object references.

#### Adding and removing values to Set

```js
let m = new Set(); // new Set([1, 2, 3])
m.add(1);
m.add(2);
let setSize = m.size;
m.delete(1)
```

#### Iterating a Set 
```js
let m = new Set([1,2,3,4,5,6]);

for(let x of m) {
    console.log(x);
}
```

#### WeakSet
- Only contain objects
- NO primitive data types
- Objects are held "weakly"
- Not Iterable
- No access to size property
- Garbage collected

```js
let category = new WeakSet();
category.add('Hiking'); // Error because this is not an object
category.add({category: 'Hiking'});
```

## Creating and Using Maps

```js
const mon = new Map();
mon.set(1, 2);
mon.set(2, 3);
mon.set(3, 4);
let t = mon.get(2);
let s = mon.size;
```

#### Iterating with Map

```js
const mon = new Map();
let keys = mon.keys();
let values = mon.values();
```