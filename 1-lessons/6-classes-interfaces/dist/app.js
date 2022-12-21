"use strict";
let user1;
user1 = {
    name: 'Lokesh',
    age: 22,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
class APerson {
    constructor(n) {
        this.name = n;
        this.age = 22;
        this.isStudent = true;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user2;
user2 = new APerson('Lohit');
user2.greet('Hi again - I am');
console.log(user2);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(1, 4));
//# sourceMappingURL=app.js.map