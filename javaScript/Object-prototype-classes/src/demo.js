'use strict'; 
(function() {

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.age = 29;
    display(Person.prototype)

    let jim = new Person('Jim', 'Cooper')
    let sofia = new Person('Sofia', 'Cooper')
    sofia.__proto__.age = 19;

    display(jim.__proto__) // Person {age: 29}
    display(sofia.__proto__) // Person {age: 29}
    display(sofia.__proto__ === Person.prototype) // true
})();