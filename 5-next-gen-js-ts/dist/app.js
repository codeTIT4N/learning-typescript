"use strict";
// won't be able to change the value using const
const userName = 'Lok';
// userName='ddd' - this will not work
// value can change using let
let age = 22;
age = 25;
// difference between var and let - scope in which the variable is available
function add1(a, b) {
    // result will be available only inside this fn
    var result;
    result = a + b;
    return result;
}
// console.log(result); - this will give error
// if (age > 20) {
//     var isOld = true;
// }
// console.log(isOld); - this will give error in TS but not in JS
if (age > 20) {
    let isOld = true;
}
// console.log(isOld) - this will give error in both TS and JSs
// default assigned to second variable
const printOutput = output => console.log(output);
const add2 = (a, b = 4) => a + b; //notice how we set the default value of b
printOutput(add2(5)); //using default value
// default assigned to first variable
const add3 = (a = 2, b) => a + b;
// printOutput(add3(7)) //this will give error
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
// printOutput(add2(5, 1))
