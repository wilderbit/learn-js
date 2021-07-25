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

#### Modifying Properties
- Getters and setters properties lives inside the prototype property of a class.
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

        isAdult() {
            return this.age >= 18;
        }

    }

    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

    let jim = new Person('Jim', 'Cooper', 29);
    display(jim) // Now fullName will also get printed
```

#### Inheritance with classes
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
    
        isAdult() {
            return this.age >= 18;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age)
            this._enrolledCourses = [];
        }
    
        enroll(course) {
            this._enrolledCourses.push(course)
        }
    
        getCourses() {
            return this.fullName + "'s enrolled courses are: " +
                this._enrolledCourses.join(', ')
        }
    }
    
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});
    
    let jim = new Student('Jim', 'Cooper', 29);
    jim.enroll("CS101")
    jim.enroll("CS102")
    display(jim.getCourses())
    display(jim)
```

#### Static Properties and Methods
```js
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        static adultAge = 18;

        get fullName() {
            return this.firstName + ' ' +  this.lastName;
        }

        set fullName(value) {
            let nameParts = value.split(' ');
            this.firstName = nameParts[0]
            this.lastName = nameParts[1]
        }

        isAdult() {
            return this.age >= 18;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age)
            this._enrolledCourses = [];
        }

        enroll(course) {
            this._enrolledCourses.push(course)
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are: " +
                this._enrolledCourses.join(', ')
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }
    }

    let jim = new Person('Jim', 'Cooper', 29);
    let jimStudent = Student.fromPerson(jim);
    display(jimStudent)
    display(Person.adultAge)

```