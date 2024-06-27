/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
*/
function AddNumber(num){
let num1=num;
let sum=0
if(num>0){
  sum  =num1+AddNumber(num-1) 
}
return sum  ;      
}
console.log(AddNumber(600))