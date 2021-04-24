/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

//My solution 1

function removeEveryOther(arr){
  //your code here
  let newArray=[];
  for(let i=0; i < arr.length; i+=2){
    newArray.push(arr[i])
    
  }
  return newArray;
}

// 2

function removeEveryOther(arr){
  //your code here
  return arr.filter((elem,index)=> index % 2 === 0);
  
}


