//Simple, remove the spaces from the string, then return the resultant string.

//My solution

function noSpace(x){
  
return x.split(" ").join("");
}

//Method 1: Using split() and join() Method: 

/*The split() method is used to split a string into multiple sub-strings and return them in the form of an array.
A separator can be specified as a parameter so that the string is split whenever that separator is found in the string. 
The space character (” “) is specified in this parameter to separate the string whenever a space occurs.

The join() method is used to join an array of strings using a separator. 
This will return a new string with the joined string using the specified separator. 
This method is used on the returned array and no separator (“”) is used to join the strings. 
This will join the strings in the array and return a new string. This will remove all the spaces in the original string.*/

//searching from https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
