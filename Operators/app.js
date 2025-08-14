/* Operators 

Arthemetic Operators
comparision Operators
assignment operators
logical Operators
increment or decrement
typeof Operator
spread Operator
rest Operator
bitwise Operator
ternary Operator   */

let a = 10;
let b = 15.0;
console.log(`addition : ${a + b} , subraction: ${a - b} , multiplication : ${a * b} 
Division : ${a / b} ,Modulo Division : ${a % b} , power :   `)

// Comparision operators

console.log(a==b,a!=b,a>b,a<b,a>=b,a<=b,a===b)

// short hand assignment operators

console.log(`a+=b : ${a+b} , a-=b : ${a-b}`)

// logical operators
let c=20;
let d=0;
console.log(`logical and : ${c&&d} , logical or : ${c||d} , logical not : ${!a}`);

// Inc or Dec operator 

let e=1;
let f=3;

console.log(`pre increment : ${++e} , post incremenet : ${e++}`)
console.log("e value after post increment " + e)

// spread operator    [... ]

let arr=[1,4,3,2];
let arr1=[...arr]
console.log(`arr1 : ${arr1}`)
console.log(arr1)