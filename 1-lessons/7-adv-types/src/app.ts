// note: this will work the same with interfaces
type Admin = {
    name: string;
    privileges: string[];
};
// note: this will work the same with interfaces
type Employee = {
    name: string;
    startDate: Date;
};

// intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Lokesh',
    privileges: ['create-server'],
    startDate: new Date()
}
console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { //this is a type guard
        return a.toString() + b.toString()
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin; //union type - this is like OR

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
// note: these could be classes as well
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 12 })

// type casting
const paragraph = document.querySelector('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'hi';

// index properties
interface ErrorContainer { //{ email: 'Not a valid email'. username; 'Must start with a character!'}
    [prop: string]: string;
}

const errrorBag: ErrorContainer = {
    1: 'Not a valid email',
    username: 'Must start with a capital character!'
}

// optional chaining
// imagine this data coming from a server
const fetchedData = {
    id: 'u1',
    name: 'lokesh',
    job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedData?.job?.title);

// nullish coalescing
// imagine this data coming from a server or dom
// const userInput = null;
const userInput = '';

const storedData = userInput ?? 'DEFAULT' //fallback value

console.log(storedData);
