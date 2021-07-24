'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function () { return this.age >= 18 }
  }

  let person = new Person('Abrar', 'Khan', 27)

  let newPerson = Object.create(
      Object.prototype,
      {
        firstName: {value: 'Abrar', enumerable: true, writeable: true, configurable: true},
        lastName: {value: 'Abrar', enumerable: true, writeable: true, configurable: true},
        age: {value: 29, enumerable: true, writeable: true, configurable: true},
      }
  )


  display(newPerson)

})();