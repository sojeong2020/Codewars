/*
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.
*/

//My solution

function take(arr, n) {
  // Your code here
  return arr.slice(0,n);
}


/* Note from MDN
The splice() method 
changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]


The slice() method 
returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
*/
