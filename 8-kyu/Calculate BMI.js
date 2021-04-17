/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//My solution 1

function bmi(weight, height) {
  let cal=weight / height **2;
  if(cal <= 18.5){
    return "Underweight";
    }else if(cal <= 25.0){
      return "Normal";
    }else if(cal <= 30.0){
      return "Overweight";
    }else if(cal > 30){
      return "Obese";
    }
 }

//My solution 2

function bmi(weight, height) {
  let bmi=weight/height **2;
  return bmi <=18.5 ? "Underweight": bmi <= 25.0 ? "Normal": bmi <= 30.0 ? "Overweight": "Obese";
  
}
