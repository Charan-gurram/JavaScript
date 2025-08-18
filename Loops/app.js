/* Js loops consists of 5 types 

1.for    -entry contoled
2.while   -entry controlled
3.do while  -exit controlled
4.for of    - used to iterate arrays
5.for in     - used to iterate objects                                      */ 

console.log("for loop")

for(i=0;i<5;i++)//If we declarea variable without any keyword then it becomed=s global scope
{
    console.log(i);
}
for(let j=0;j<5;j++)//(start ; condition ; inc/dec)
{
    console.log(j+ " : hi");
}

// we can intialise outside also and inc or dec in loop body also

let j=0
for(;j<10;)
{
    console.log(j +" : hello world");
    j++;
}
// itertaiong a string using for loop
  let str="charan"
  console.log("itertaiong a string using for loop : ")
  for(let i=0;i<str.length;i++)
  {
    console.log(i)
  }
// Iterating an array using for loop
 let arr1=[1,2,3,4]
 console.log("Iterating an array using for loop")
 for(let i=0;i<arr1.length;i++)
 {
    console.log(arr1[i])
 }

// while-loop  (we use it when we dont to run ot iterate how many times of block)
   console.log("while loop : ")
 let h=0;
 while(h<=3)
 {
     console.log("while loop executed "+h+" time");
     h++;
 }

//  do while()   - block os statement written in loop body will executes atleast for 1 time
//                 and later checks the condition in the while
// do while syntax
/* do{
        //statements
    }
    while()
    {

    } */
   console.log("do while loop : ")
    let d=1;
    do{
        console.log("in do block")
        d++;
    }
    while(d<4)


//  for-of loop  : used to itrearte the arrays ,but we cant use of indexes here
//                  use when we want to iterate full array 
//                   used to iterate arrays

console.log("for of loop")
let arr=[1,"hi",5.0]
for(item of arr)
{
    console.log(item)
}

// for in loop  : used to iterate objects

// for(iterator in object name)   -- syntax
// {
//     to acces the values objectname[iteraotor]
// }

console.log("for in loop to iterate objects : ")
const person = {name: "Charan", age: 24, city: "Hyderabad"};

for(let o in person){
    console.log(o, ":", person[o]);  // using dot notation will give undefinded
} 
