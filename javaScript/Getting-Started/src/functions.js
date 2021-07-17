
let fn = function() {
    console.log("Function Expression")
    function showMessage() {
        console.log("Hello")
    }
    return showMessage
};

fn()();


let person = {
    name: 'Abrar'
}

person['age'] = 36;

person.country = 'India'

console.log(person.age, person.country)