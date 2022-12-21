"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
let merged = merge({ name: 'lokesh', hobbies: ['Sports'] }, { age: 22 });
console.log(merged.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['hello', 'namaste', 'ola']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
let output = extractAndConvert({ name: 'Lokesh' }, 'name');
console.log(output);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Lokesh');
textStorage.addItem('Devanshu');
textStorage.removeItem('Lokesh');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(22);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesList = ['lokesh', 'devanshu'];
//# sourceMappingURL=app.js.map