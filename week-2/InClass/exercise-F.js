function validacion(username, typeOfUser) {

    if (username.toUpperCase() == username && username.length >= 5 && username.length <= 10) {
        return "username valid";
    }
    else {
        return "username invalid"
    }
}

console.log(validacion("ADRI", "admin"));

function validacion2(typeOfUser) {

    if (typeOfUser == "admin" || typeOfUser == "manager") {
        return "username valid";
    }
}

console.log(validacion2("admin"));

