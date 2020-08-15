let numberOfStudents = 15;
let numberOfmentors = 8;

let total = numberOfStudents + numberOfmentors;

const porcentajeStudent = numberOfStudents * 100 / total;
const totalStudent = Math.ceil(porcentajeStudent);

const porcentajementors = numberOfmentors * 100 / total;
const totalmentor = Math.ceil(porcentajementors);

console.log("Percentage students:" + totalStudent + "%");
console.log("Percentage mentors:" + totalmentor + "%");