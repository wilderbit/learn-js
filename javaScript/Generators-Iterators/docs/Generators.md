## Generator Function
A function that can be paused and resumed at a later time,
while having the ability to pass values to and from the 
function at each pause point.

#### Syntax 

```js
function* gen() {}
function * gen() {}
function *gen() {}
const obj = {
    *gen(params) {}
}
```

Executing the generator function alone does not execute its containing code.

```js
function *generateTime() {
    console.log(Date.now())
    yield
    console.log("execution continued")
}

generateTime() // It won't run the code

const it = generateTime();
it.next();
```

#### Yield
Yield keyword signals the pause point of a generator function.
- Can send a value to the iterator
- Receive a value from the iterator;

```js
function *generateTime() {
    let ts = Date.now();
    console.log(`original ts: ${ts}`)
    yield ts;
    console.log("Next Yield")
    let x = yield;
    console.log(`x: ${x}`)

}

generateTime() // It won't run the code

const it = generateTime();
let ts = it.next();
console.log(`original ts: ${JSON.stringify(ts)}`)
it.next();
it.next(5);
```

#### Yield Delegation
Yield delegation essentially allows a host generator function to control the iteration of
a different generator function.