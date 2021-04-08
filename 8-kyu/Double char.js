/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__ 

*/

//My solution

function doubleChar(str) {
 
  let newChar="";
  for(let i=0; i< str.length; i++){
    newChar += str[i] + str[i];
    }
return newChar;
}

//Other solutions from Codewars

//solution 1

const doubleChar = (str) => str.split("").map(c => c + c).join("");

//solution 2

function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}
