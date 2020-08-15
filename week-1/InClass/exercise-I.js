function getBornYear(age) {
    return 2020 - age
}

function getPersonInfo(name, age) {
    return name + "-" + getBornYear(age;)
}

console.log(getPersonInfo("Adriana", 30));