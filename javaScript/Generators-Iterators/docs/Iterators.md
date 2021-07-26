# Iterator
An Iterator lets you iterate through a collection's content one at a time, pausing at each item.

An Iterator is any object that implements the iterator protocol by having a `next()` method that
returns a value property and a done property.


## What exactly is Iterable?
- An array is a built-in iterable
- There are other built-in iterables(strings, maps, and sets)
- Iterables implement the @@iterator method
- Symbol.iterator a well-known symbol in JavaScript

#### for...of Loops
- This type of loop only works with iterable object
- Don't confuse with a for...in loop
- for...of loop iterates over VALUES, for...in iterates over enumerable properties.
- Array Iterator
```js
const arr = [0, 3, 4 , 6];
const it = arr[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
```

```shell
{ value: 0, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 6, done: false }
{ value: undefined, done: true }
```
- Map Iterator

```js
let map = new Map();
map.set('Key 1', 'Value 1');
map.set('Key 2', 'Value 2');
let mapIt = map[Symbol.iterator]();
console.log(mapIt.next())
console.log(mapIt.next())
console.log(mapIt.next())

for (const [x, y] of map) {
    console.log(`${x} and ${y}`)
}

```

```shell
{ value: [ 'Key 1', 'Value 1' ], done: false }
{ value: [ 'Key 2', 'Value 2' ], done: false }
{ value: undefined, done: true }
Key 1 and Value 1
Key 2 and Value 2
```
