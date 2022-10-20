function add(n1: number, n2: number): number {
    return n1 + n2
}

function printResult(num: number): void {
    console.log('Result ' + num);
}

printResult(add(5, 12))
// console.log(printResult(add(5, 12)));

// undefined type
// let someValue: undefined;



function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log("From addAndHandle()", result);
})


// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add; //Note: add is a function

console.log(combineValues(8, 1));
