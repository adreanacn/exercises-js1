/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

var name = "daniel";

function capitalise(str) {
  var name = str.split();
  var newName = [];
  for (i = 0; i < name.length; i++) {
    newName.push(name[i].charAt(0).toUpperCase() + name[i].slice(1));
  }
  return newName.join(' ');
}





/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
