/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(numbers, names) {
  if (numbers && numbers.length)
    return false;
  else {
    (names && names.length)
    return true;
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/*
  EXPECTED RESULT
  ---------------
  false
  true
*/
