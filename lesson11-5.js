let name = "Luis";
let age = 29;
let stars = 5.2;
let isSubscribed = true;

let student = {
  name: "Luis",
  age: 29,
  weight: 72.8,
  isSubscribed: true,
};

console.log(typeof student);
console.log(student);
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg`
);

let students = [];
students = [student];
console.log(students);
console.log(students[0]);

const john = {
  name: "John",
  age: 25,
  weight: 85.1,
  isSubscribed: false,
};

students[1] = john;
console.log(students);
