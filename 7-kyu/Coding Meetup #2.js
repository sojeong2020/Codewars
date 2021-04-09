/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
*/

//My solution

function greetDevelopers(list) {
for (let i = 0; i < list.length; i++){
list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
}
return list
  }

/*How to add a property to an object in JavaScript

https://www.techiedelight.com/add-property-to-object-javascript/
*/


//Other solutions from Codewars

//solution 1    forEach() method

function greetDevelopers(list) {
  list.forEach(function(developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
  });
  
  return list;
}

//solution 2       map() method

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  return list.map( function( a ) {
                   a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
                   return a;
                  });
}

//solution 3    ( ...operator )

const greetDevelopers = list => list.map(
  dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
);

//solution 4      (similar to my solution)

function greetDevelopers(list) {
  for (var i=0; i<list.length; ++i)
    list[i]['greeting']='Hi '+list[i].firstName+', what do you like the most about '+list[i].language+'?';
  return list;
}

