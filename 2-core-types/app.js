function combine(input1, input2, resultCOnversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultCOnversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log("Combined ages =", combinedAges);
var combinedStringAges = combine('30', '26', 'as-text');
console.log("Combined string ages =", combinedStringAges);
var combinedNames = combine('Lokesh', ' Kumar', 'as-text');
console.log("Combined names =", combinedNames);
