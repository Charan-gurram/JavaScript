/* Datatypes in javascript

number
string
boolean 
null
undefiend
symbol
bigint

non- primitive

array
object 
functions 
array of an obj   */

// Numbers

let num=25;
console.log(num);
let num1=23.667;
console.log(num1);
let num2=1.0;
console.log(num2);

// strings 

let s1="Hello";
console.log(s1);
let name = "charan ";

// String templates
console.log(`Hello ${name} how are you ? `);

// Boolean values 

let flag=true;
console.log(flag);

// null is a data type which holds a empty value as null

let g=null;
console.log(g);

// undefiend if the variable is declared and not assigned then it is udefined

let h;
console.log(h);

// arrays can be collection of any data type in java script

let arr=[1,'home',false,null,4,7];
console.log(arr)

// objects : It works like a dictionaly which has map and value

let obj={1:'charan','gsc' : 'sri charan'}
console.log(obj)

// array of objects

let aob=[{'a':'apple','b':'ball'},{'c':'cat',1:'one'},{'two':2}]
console.log(aob[0].a)
console.log(aob[2].two)