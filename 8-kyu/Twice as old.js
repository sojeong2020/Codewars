/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

//My solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sonDoubleAge=sonYearsOld * 2
  if(dadYearsOld < sonDoubleAge){
    let result=sonDoubleAge - dadYearsOld
    return result;
  } else{
    return dadYearsOld -sonDoubleAge;
  }
}

//Other solutions from Codewars

// 1

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// 2

function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

/* Note from MDN
The Math.abs() function
returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
*/
