const students = [
    "Monica",
    "Teresa",
    "Wendy",
    "Tadeo",
    "Frida",
    "Samuel",
    "Susana",
];

for (let i = 0; i < students.length; i++) {
    if (students[i].charAt(0) == "T") {
        const studentMessage = "student name: " + students[i];
        const indexMessage = "student number: " + i;
        console.log(indexMessage, studentMessage);
    }
}