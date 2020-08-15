let numberOfStudents = 15;
let numberOfmentors = 8;

const porcentajeStudent = numberOfStudents * 100 / 23;
const totalStudent = Math.ceil(porcentajeStudent);

const porcentajementors = numberOfmentors * 100 / 23;
const totalmentor = Math.ceil(porcentajementors);

console.log("Percentage students:" + totalStudent);
console.log("Percentage mentors:" + totalmentor);