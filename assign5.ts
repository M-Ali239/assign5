console.log("Assignment No.5----30/08/23");
//write a programe that uses filter to remove all negative number from anarray of numbers.
const array1=[2, -3, 4, 5,-4,6,-5,-8,7,8];
const negNumber= array1.filter(num=>num<0);
console.log(negNumber);

//Given a array of numbers [1,2,3,4,5], use a map method to create a new array where each number is multiplied by 2.
const array2=[1,2,3,4,5];
const newArray=array2.map(num=>num*2)
console.log(newArray);

//Given an array of string ["apple","banana,"cherry","date],"grape"] use the filter method to create an array containing only the fruits with more than five characters.
const array3=["apple","banana","chery","date","grape"];
const fiveChaFru=array3.filter(fruit=>fruit.length>4)
console.log(fiveChaFru);

//Given an array of numbers[1,2,3,4,5,6,7,8,9,10], use the mape and filter methods together to create a new array containing the squares of even numbers.
const array4=[1,2,3,4,5,6,7,8,9,10];
const sq=array4.filter(num=>num%2===0);
 const a=sq.map(num=>num*num);
console.log(a);

//Given an array of temperatures in celsius [10,20,30,40], use the map method to create a new array where each temperature is converted to fahrenheit using the formula (Celsius*9/5)+32,
const array5=[10,20,30,40];
const fohrenheit=array5.map(num=>(num*9/5)+32);
console.log(fohrenheit);

//Given an array of numbers[3,6,9,12,15,18], use the map and filter method together to creater a new array containing the doubles value of odd number.
const array6=[3,6,9,12,15,18];
const odd=array6.filter(num=>num%2!==0);
console.log(odd);
const double=odd.map(num=>num*2);
console.log(double);

//Given an array of names[ "allice","bob","charli","david","amily"], use the forEach method to log each neame with exclaimation mark at the end EventTarget."Allice!". 
const array7=[ "allice","bob","charli","david","amily"];
var n=array7.forEach((fruit)=>{console.log(`${fruit}!`)});
