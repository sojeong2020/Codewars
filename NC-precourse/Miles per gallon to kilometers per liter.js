/*Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/

//My solution

function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  
  let convert = 1.609344 /4.54609188
  let cal = mpg * convert
  let result = (mpg * convert).toFixed(2).split('')
  
   if(result[result.length-1] === 0){
    return Number(cal.toFixed(1));
  }
    return Number(cal.toFixed(2));
  }

