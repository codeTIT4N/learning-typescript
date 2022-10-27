class Department {
    name: string;
    // for initializing variables inside of the class
    constructor(n: string) {
        this.name = n;
    }
}

const it = new Department('IT'); //creating new object

console.log(it);
