/*Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

//My solution

function initializeNames(name){
  // Insert your brilliant code here
    let word = name.split(' ');
   for (var i = 1; i < word.length - 1; i++) 
       word[i] = word[i].charAt(0).toUpperCase() + '.';
   return word.join(' ');
}
