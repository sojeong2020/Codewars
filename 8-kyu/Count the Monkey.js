//You take your son to the forest to see the monkeys. 
//You know that there are a certain number there (n), but your son is too young to just appreciate the full number, 
//he has to start counting them from 1.

//As a good parent, you will sit and count with him. Given the number (n),
//populate an array with all numbers up to and including that number, but excluding zero.

//For example:

//monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//monkeyCount(1) // --> [1]

//My solution

function monkeyCount(n) {
  let monkeyCount=[];
  for(let i=1; i <= n; i++)
   monkeyCount.push(i)
  {
    return monkeyCount;
  }
  
 //easy
  
  
 //Other solution I searched from Codewars
  
 //solution 1
  
 function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}
  
//solution 2
  
  function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  
  return arr;
}
  
  
