'use strict'; 
(function() {

  let person = {
    firstName: 'Abrar',
    lastName: 'Khan',
    age: 29,
    isAdult: function () { return this.age >= 18}
  }

  display(person.isAdult())

})();