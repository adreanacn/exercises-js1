/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


for (let i = 0; i < daysOfWeek.length; i++) {
  if (daysOfWeek[i].charAt(0) == "T") {
    const Message = "Day of the week with T: " + daysOfWeek[i];
    console.log(Message);
  }
}

