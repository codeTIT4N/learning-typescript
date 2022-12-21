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
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Lohit',
    age: 21
};
// const copiedPerson = person; -- does not create a real copy of person object
const copiedPerson = Object.assign({}, person); //creates a copy of person
// add function with as many values as we want
const addNums = (...nums) => {
    let result = 0;
    return nums.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addNums(5, 10, 2, 6.3);
console.log(addedNumbers);
// array destructuring
const greetings = ['namaste', 'hi', 'hello'];
const [greeting1, greeting2, ...remainingGreetings] = greetings;
console.log(greeting1, greeting2, remainingGreetings);
// object destructuring
const newObj = {
    key1: 'val1',
    key2: 'val2'
};
const { key2, key1: firstKey } = newObj;
console.log(firstKey, key2);
