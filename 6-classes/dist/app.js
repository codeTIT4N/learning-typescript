"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Accounting');
        this.admins = admins;
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === 'Aniket') {
            return;
        }
        this.employees.push(name);
    }
}
const accounting = new AccountingDepartment('d2', ['Krishna', 'Vikas']);
console.log(accounting);
