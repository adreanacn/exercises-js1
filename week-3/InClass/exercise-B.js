const students = [
    "Ana",
    "Daniel",
    "Mariana",
    "Javier "
];

const students2 = [
    "Paola",
    "Fabio",
];

const students3 = (students.concat(students2))

console.log(students3.sort());

function isAStudent(name) {
    return students3.includes(name);
}

console.log(isAStudent("Fabio"));