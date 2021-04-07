//You will be given an array of objects (associative arrays in PHP) representing data about developers 
//who have signed up to attend the next coding meetup that you are organising.

//Your task is to return:

//true if at least one Ruby developer has signed up; or
//false if there will be no Ruby developers.

//My solution

function isRubyComing(list) {
  // thank you for checking out my kata :)
  for(let i=0; i< list.length; i++){
    if(list[i].language === "Ruby"){
      return true;
    }
  }return false;
}

//Why another my solution doesn't work??

function isRubyComing(list) {
  // thank you for checking out my kata :)
  for(let i=0; i < list.length; i++){
    return list[i].language === 'Ruby' ? true : false ;
  }
}
