function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const person: {
  name: string;
  age: number;
} = {
  name: 'Lokesh',
  age: 22
}

// arrays and tuples
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string] //tuple type
} = {
  name: 'Lohit',
  age: 21,
  hobbies: ['Football', 'hacking'],
  role: [2, 'author']
}

// let favoriteActivities: any[];
// favoriteActivities = ['football', 3, true];

let favoriteActivities: string[];
favoriteActivities = ['football', 'hacking'];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}

const result = add(number1, number2);
console.log(result);
// console.log(person.nickname);

// enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};

const person3 = {
  name: 'Sid',
  age: 23,
  hobbies: ['video games', 'netflix'],
  role: Role.ADMIN
}
