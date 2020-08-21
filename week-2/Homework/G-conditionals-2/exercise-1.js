/*
  Conditionals
  ---------------------------------
  Write a function to test if a provided number is negative or positive
  - if number is less than zero, return the word "negative"
  - if number is more or equal to zero, return the word "positive"
*/


var number1 = 5;
var number2 = -1;

function negativeOrPositive(number1) {
  if (number1 >= number3) {
    return "positive";
  } else (number3 < number2)
  return "negative";

}


/* 
function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}
*/

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var number1 = 5;
var number2 = -1;
var number3 = 0;

console.log(number1 + " is " + negativeOrPositive(number1));
console.log(number2 + " is " + negativeOrPositive(number2));
console.log(number3 + " is " + negativeOrPositive(number3));

/*
  EXPECTED RESULT
  ---------------
  5 is positive
  -1 is negative
  0 is positive
*/
