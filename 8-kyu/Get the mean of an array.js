//It's the academic year's end, fateful moment of your school report. 
//The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! 
//You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.


//My solution

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  let sum=0;
  let len=marks.length;
  for(let i =0; i < marks.length; i++){
    sum = sum + marks[i]
  }return Math.floor(sum/len);
}

// use Math.floor() to rounded down 


//Other solutions from Codewars

//solution 1

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

//Solution 2

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

//Solution 3

function getAverage (marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}
