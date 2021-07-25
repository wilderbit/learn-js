'use strict'; 
(function() {

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.age = 29;
    let jim = new Person('Jim', 'Cooper')
    let sofia = new Person('Sofia', 'Cooper')

    display(jim.age) // 29
    display(sofia.age) // 29

    display(jim.hasOwnProperty('age')) // false
    jim.age = 18;
    display(jim.hasOwnProperty('age')) // true
    display(jim.age) // 18
    display(jim.__proto__.age) // Still 29

})();