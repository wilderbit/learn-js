
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