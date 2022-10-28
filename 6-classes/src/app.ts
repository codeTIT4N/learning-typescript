class Department {
    // private readonly id: string
    // public readonly name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);

    }
}


// Inheritance
class AccountingDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        super(id, 'Accounting')
        this.admins = admins;
    }

    addEmployee(name: string) {
        if (name === 'Aniket') {
            return;
        }
        this.employees.push(name)
    }
}

const accounting = new AccountingDepartment('d2', ['Krishna', 'Vikas'])
console.log(accounting);


// const it = new Department('d1', 'IT'); //creating new object
// it.addEmployee('ankit');
// it.addEmployee('bhuvan');
// it.addEmployee('vedika');

// it.describe();
// it.printEmployeeInfo();

// const itCopy = { name: 'DUMMY', describe: it.describe };

// itCopy.describe()