/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
/*

//My solution

function getMiddle(s){
  let number= Math.floor(s.length/2)
  
  if(s.length % 2 !== 0){
    return s[number];
  }else if(s.length % 2 === 0){
    return s.slice(number-1, number+1);
  }else if(s.length === 1){
     return s[0];
    }
 }
