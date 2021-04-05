//Create a function with two arguments that will return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

//My soluton

function countBy(x, n) {
  let newArr = [];
  
  for(let i=1; i<=n * x; i++){
    if( i % x === 0){
      newArr.push(i)
    }
 } return newArr;
}


//Other solution from Codewars

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

