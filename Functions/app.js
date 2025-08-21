// Declarative functions
// In JavaScript, a function definition means creating (declaring) a function that performs some task.

// 1. Function Declaration (Named Function)

// Function wittout return and without parametres

 function greet(){
    console.log("I am a greet function which is without return and without parametres");
 }
 greet();

//  Function witth return and without parametres

function msg()
{
    return "I am msg Function witth return and without parametres"
}
console.log(msg());

//  Function without return and with parametres
let a,b;
function addition(a,b)
{
    console.log("I am addition function  without return and with parametres - addition is " + (a+b));
}
addition(2,3);

//  Function with return and with parametres
let c,d;
function subraction(c,d)
{
    return "I am subraction function  with return and with parametres - addition is " + (a-b);
}
console.log(subraction(10,3));

// Function with default parametres
function wishing(name="charan")
{
    console.log("I am wishing function with default parameter");
    
    console.log(`Hello good morning ${name}`)
}
wishing("arun");

// 2. Function Expressions - Here we can have or dont have function name instead assign a function to one variable 
//  Anonymous function expression

let exchange = function(pname,ename)
{
    console.log("I am function expression")
    return `Hello you are exchanging ${pname} with ${ename}`;
}
console.log(exchange("small shoe","large shoe"))

// 3. Function expression with function name
 const greeti = function sayHello(name) {
  return "Hello, " + name + "!";
};
console.log(greeti("Java script"));

// 4. imediately invoked function expression [IIFE] or self invoking

// syntax - (function(paramter){
//                      definition})(passing parameter)     - (function () {body} ) ( )

(function(gadget){
    console.log("I am Self invoking function");
    console.log(`I am ${gadget} gadget type`)
})("electronic")


// 5.Arrow function

// Arrow function without any parametres

  const hisay = () =>console.log("hisay function is a arrow function")
  hisay();

// Arrow function with single parametre   - paranthesis for parameter is optional

    const sayhi = nam => console.log(`hello ${nam}`)
    sayhi('gurram');

// Arrow function with multiple parametres
  
   let product = (pname,quantity) =>console.log(`You purchased ${pname} and quantity of ${quantity}`)
   product("mobile",1)

//     Arrow function with multiple parametres and with  explicit return statement  
//     use this when you have multiple statements inside the function

    let costofproducts = (pname,price) =>{ 
         console.log("Arrow function with explicit return statement ");
        return `cost of ${pname}  is ${price}`
       }
    console.log(costofproducts("laptop",50000)) 

//   Arrow function with multiple parametres and with  implilicit return statement 

//  use this when you have single line of statements in the arrow function

   let costofitem = (iname , iprice) => `price of ${iname} is ${iprice}`
   console.log(costofitem("desktop",20000))

// call back functions  : Passing a function as paraametre to another function

function display(cname,callback)
{
    console.log(`Hi ${cname} how are you`)
    callback();
}

function callback()
{
    console.log("I am callback function")
}

display("Gurram",callback)
