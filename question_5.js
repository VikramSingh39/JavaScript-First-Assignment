/*

Question 5:

Leap Year Checker – Ask the user for a year and determine if
it's a leap year or not. 
 
*/

let year = 2001
 
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log(`${year} is a leap year`)
}else{
      console.log(`${year} is not a leap year`);
}
