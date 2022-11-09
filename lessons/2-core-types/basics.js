function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var person = {
    name: 'Lokesh',
    age: 22
};
// arrays and tuples
var person2 = {
    name: 'Lohit',
    age: 21,
    hobbies: ['Football', 'hacking'],
    role: [2, 'author']
};
// let favoriteActivities: any[];
// favoriteActivities = ['football', 3, true];
var favoriteActivities;
favoriteActivities = ['football', 'hacking'];
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var result = add(number1, number2);
console.log(result);
// console.log(person.nickname);
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person3 = {
    name: 'Sid',
    age: 23,
    hobbies: ['video games', 'netflix'],
    role: Role.ADMIN
};
