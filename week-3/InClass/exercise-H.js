const names = ["Javier", "Gina", "Adriana", "Oscar", "Mariana"];

function findme(nombre) {
    if (nombre === "Adriana") {
        return "Found me! :)";
    } else {
        return "Haven't found me :(";
    }
}

let result = names.find(nombre => nombre === "Adriana");
if (result === "Adriana") {
    console.log("found me!");
} else {
    console.log("haven't found me :(")

}
console.log("result: ", result)