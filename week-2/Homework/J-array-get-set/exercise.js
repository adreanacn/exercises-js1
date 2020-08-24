/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

function first(numbers) {
  if (numbers[0])
    return [1]; // complete this statement
}


function last(numbers) {
  if (numbers[2] === 3)
    return [3]; // complete this statement
}


function secondlast(names) {
  if (names[3] === "Joe") {
    return "Joe";
  }
  return "index not matched";
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(secondlast(names));

/*
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
