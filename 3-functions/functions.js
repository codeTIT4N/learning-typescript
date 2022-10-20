function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
printResult(add(5, 12));
// console.log(printResult(add(5, 12)));
// undefined type
// let someValue: undefined;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log("From addAndHandle()", result);
});
// let combineValues: Function;
var combineValues;
combineValues = add; //Note: add is a function
console.log(combineValues(8, 1));
