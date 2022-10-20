// unknown type
// let userInput: any;
var userInput;
var userName;
userInput = 5;
userInput = "hello";
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
