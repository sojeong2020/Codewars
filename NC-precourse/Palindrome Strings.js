/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

//My solution

function isPalindrome(line) {
  let newLine=line.split('')
  let reverseLine=newLine.reverse().join('')
  if(line === reverseLine){
    return true;
  }
  return false;
}

