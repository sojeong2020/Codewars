//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

//My solution

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count=0;
  for(let i=0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i]) count ++
    }
  return count;
}

// I solved it with loop.




//Other solutions I searched

//solution 1(use loop)

function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}

//solution 2 (use filter)

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}

//solution 3 (reduce)

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
}
