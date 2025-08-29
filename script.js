
// Custom Function //
function greetUser(name) {
    ;
    console.log('hello, ' + name)
}
greetUser('Alice');


const multiply = function (a, b) {
    return a * b;
}
let product = multiply(7, 3);
console.log("The product is: " + product)


// Loop Example //
const colors = ['red', 'green', 'blue', 'orange']
for (let color of colors) {
    console.log(color);
}

for (let i = 0; i < 5; i++) {
    console.log("iteration number: " + i)
}

//DOM Interaction //
const paragraph = document.getElementById('myParagraph')
const button = document.querySelector('button')
const greeting = document.getElementById("myParagraph").innerHTML = 'Hello world'

console.log(paragraph)
console.log(button)
console.log(greeting)
