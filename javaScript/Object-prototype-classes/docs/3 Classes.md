# JavaScript Classes

#### Creating Object with Classes
```js
    class Person {
        // Runs everytime when new object is created
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let jim = new Person('Jim', 'Cooper', 29);
    display(jim)
```

#### Getters and Setters

```js
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName() {
            return this.firstName + ' ' +  this.lastName;
        }

        set fullName(value) {
            let nameParts = value.split(' ');
            this.firstName = nameParts[0]
            this.lastName = nameParts[1]
        }
    }

    let jim = new Person('Jim', 'Cooper', 29);
    display(jim.fullName)
    jim.fullName = 'Abrar Khan'
    display(jim.fullName)
```

#### Functions in Classes

```js
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        isAdult() {
            return this.age >= 18;
        }

    }
    let jim = new Person('Jim', 'Cooper', 29);
    display(jim.isAdult())
```