abstract class Department {
    // private readonly id: string
    // public readonly name: string;
    protected employees: string[] = [];
    static fiscalyear = 2022;

    constructor(private readonly id: string, public name: string) {
        // accessing static inside not static function
        console.log(Department.fiscalyear);
    }

    abstract describe(this: Department): void;

    // static method
    static createEmployee(name: string) {
        return { name: name };
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);

    }
}
// calling static method - notice here we don't need to create an instance of Department
let employee1 = Department.createEmployee('Lokesh');
console.log(employee1);
console.log(Department.fiscalyear);

// Inheritance
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        } else {
            throw new Error('No report found!!!')
        }
    }
    // setter
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!!!')
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(this: Department): void {
        console.log('Accounting Department');
    }

    addEmployee(name: string) {
        if (name === 'Aniket') {
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting = AccountingDepartment.getInstance();
console.log(accounting);

// const accounting = new AccountingDepartment('d2', ['Krishna', 'Vikas'])
// console.log(accounting);
// accounting.mostRecentReport = 'new guy'
// console.log(accounting.mostRecentReport);



// const it = new Department('d1', 'IT'); //creating new object
// it.addEmployee('ankit');
// it.addEmployee('bhuvan');
// it.addEmployee('vedika');

// it.describe();
// it.printEmployeeInfo();

// const itCopy = { name: 'DUMMY', describe: it.describe };

// itCopy.describe()