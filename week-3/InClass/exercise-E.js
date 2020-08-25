let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let years = [];
birthYear.forEach((year) => {
    console.log("el año es", birthYear);
    years.push(2020 - year);
});

console.log(years);