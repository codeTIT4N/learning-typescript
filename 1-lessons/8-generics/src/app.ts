const names: Array<string | number> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000);
})

promise.then(data => {
    data.split(' ')
})

// generic functions
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

let merged = merge({ name: 'lokesh', hobbies: ['Sports'] }, { age: 22 });
console.log(merged.age);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['hello', 'namaste', 'ola']));

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

let output = extractAndConvert({ name: 'Lokesh' }, 'name');

console.log(output);

// generic classes
class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Lokesh');
textStorage.addItem('Devanshu');
textStorage.removeItem('Lokesh');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(22);
numberStorage.addItem(23);
numberStorage.removeItem(22);
console.log(numberStorage.getItems());

// object DataStorage
// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' }
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Adam' });
// objStorage.removeItem(maxObj);

// console.log(objStorage.getItems());

// Generic Utility Types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // return { title: title, description: description, completeUntil: date }
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const namesList: Readonly<string[]> = ['lokesh', 'devanshu']
// namesList.push('anika');
// namesList.pop();