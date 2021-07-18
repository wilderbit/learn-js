// Switch statement
// Switch uses strict comparison
/*
switch(<exp>) {
    case <exp>:
        // Statements
        break;
    default:
        // Statements
}
 */

// For in Statement
console.log("forInSample")
function forInSample() {
    let product = {
        id: 12,
        name: "asdasdfas",
        number: "asdasf",
        color: "sadasdf",
        cost: 1234.32141,
        listPrice: 123423.4123,
        calculateGrossProfit: function () {
            return this.listPrice - this.cost;
        }
    }

    for (const key in product) {
        console.log(`${key} = ${product[key]}`);
    }

    let str = "Hey my name is Abrar Khan";
    let letters = "";
    for(const index in str) {
        letters += str[index]
    }
    console.log(letters)
}
forInSample();
console.log("forInSampleEnd")

// For/of Statement
console.log("forOfSample")

function forOfSample() {
    let product = [
        {
            id: 12,
            name: "asdasdfas",
            number: "asdasf",
            color: "sadasdf",
            cost: 1234.32141,
            listPrice: 123423.4123,
        },
        {
            id: 12,
            name: "asdasdfas",
            number: "asdasf",
            color: "sadasdf",
            cost: 1234.32141,
            listPrice: 123423.4123,
        }
    ]

    for (const item of product) {
        console.log(JSON.stringify(item))
    }

    let str = "Hey my name is Abrar Khan";
    let letters = "";
    for(const char of str) {
        letters += char
    }
    console.log(letters)
}
forOfSample();
console.log("forOfSampleEnd")