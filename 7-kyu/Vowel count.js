//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.


//My solution

function getCount(str) {
  let vowelsCount = 0;
  let vowel="a,e,i,o,u";
  
  for(let i=0; i < str.length; i++){
    
   if( vowel.indexOf(str[i]) !== -1 )
     vowelsCount++  
  }
 return vowelsCount;
}

//Other solutions from Codewars

//Solution 1

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

//Solution 2

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}
