const birthYears = [2009, 2000, 1999, 1990, 1985, 1980, 2020];
const canDrive = birthYears.filter(able => 2020 - able >= 17);
console.log("These are the birth years of people who can drive: " + canDrive);