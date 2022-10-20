// unknown type
// let userInput: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "hello";
if (typeof userInput === 'string') {
    userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500)