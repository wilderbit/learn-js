
let fn = function() {
    console.log("Function Expression")
    function showMessage() {
        console.log("Hello")
    }
    return showMessage
};

fn()();


let person = {
    name: 'Abrar',
    showInfo: function () {
        console.log(this.name)
    }
}

person['age'] = 36;

person.country = 'India'

console.log(person.age, person.country)
person.showInfo()

// Standard built in Objects in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

let now = new Date();
console.log(now.toDateString())
console.log(Math.PI)
console.log("Hello".charAt(0))


// Document Object Model
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// getElementById return HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

// let ele = document.getElementById("<id>")
// ele.style.color = '#FFF'
// ele.style.fontWeight = '100'

// If element is a button
// ele.addEventListener('click', function(event){
// console.log('click')
// })

// Showing and Hiding Object
// ele.classList.add(className)
// ele.classList.remove(className)
// ele.classList.contains(className)

// Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log("--------------------------")
console.log("--------- Arrays ---------")
console.log("--------------------------")

// Create and Init
let values = [];
let new_values = [1, 2, 3];
let create_array = Array.of(1,2,3);

// Accessing the elements
for(let i = 0; i < new_values.length; i++) {
    console.log(new_values[i]);
}

new_values.push(4);
new_values.pop();
console.log(new_values);
new_values.push(4);

// slice() and splice()

const newValue = new_values.slice(1, 3); // It will create a new Array
console.log(newValue)
newValue.splice(1, 1) // start_position and number of element to be deleted
console.log(newValue)
newValue.splice(1, 0, 4)
console.log(newValue)