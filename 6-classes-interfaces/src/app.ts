// keep first letter capital - convention
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;
user1 = {
    name: 'Lokesh',
    age: 22,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there - I am')

interface Named {
    readonly name: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class APerson implements Greetable {
    name: string;
    lastName?: string;
    age: number;
    isStudent: boolean;

    constructor(n: string) {
        this.name = n;
        this.age = 22;
        this.isStudent = true;
    }
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}

let user2: Greetable;

user2 = new APerson('Lohit');
user2.greet('Hi again - I am');
console.log(user2);

// Interfaces as Function Types
// type AddFn = (a:number,b:number)=>number; - using custom types
interface AddFn {
    (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(add(1, 4));
