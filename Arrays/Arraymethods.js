// Array is a collection of different data types

const arra=[1,2,'hi',true];
console.log(arra);

const nums=[1,2,3,4,5];
console.log(nums);
// popping - removing last element from array
console.log("popped element: "+nums.pop());

// pushing -  adding an element at the end of  array
nums.push(6)
console.log(nums);

// shift   - Removes element in starting position of an array but it doent returns .

nums.shift()
console.log(nums);

// unshift - adds an element at the 0th index of an array

nums.unshift(0)
console.log(nums);

// slice

console.log(nums.slice(1,5));    // slice(start , end ) = end will be included it will be treated as end-1

// splice

// array.splice(start, deleteCount, item1, item2, ...)

let arr = [10, 20, 30, 40, 50, 60];

//  Remove from index 2 onwards (delete everything after index 2)
console.log(arr.splice(2));  // [30, 40, 50, 60]
console.log(arr);            // [10, 20]

// Reset
arr = [10, 20, 30, 40, 50, 60];

//  Remove 2 elements from index 1
console.log(arr.splice(1, 2)); // [20, 30]
console.log(arr);              // [10, 40, 50, 60]

// Reset
arr = [10, 20, 30, 40, 50, 60];

//  Replace 1 element at index 3
console.log(arr.splice(3, 1, 400)); // [40] → removed element
console.log(arr);                  // [10, 20, 30, 99, 50, 60]

// Reset
arr = [10, 20, 30, 40, 50, 60];

//  Insert elements at index 2 (deleteCount = 0)
console.log(arr.splice(2, 0, 77, 88)); // [] → nothing removed
console.log(arr); // [10, 20, 77, 88, 30, 40, 50, 60];

// map

const numbers=[2,4,6,8];
console.log(numbers.map(num=>num*num));   // rturns squares of a number itrates every element

//for-each      // It doesnt return array we need to store it in another varibale

const cubes= [];
numbers.forEach(num=>cubes.push(num*num*num));
console.log(cubes);

// filter

filterednums=numbers.filter(num => num>2)
console.log(filterednums);

// Reduce 

console.log(nums.reduce((accumlator,currentvalue) => accumlator+currentvalue,100));
















