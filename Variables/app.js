// variables are the contaiber which we can store,maipluaete the data

// 1.var  - Redeclaration and reassign possible

// 2.let -  redeclaration is not possible without scopes

// 3.const - re-declaration and re-assignment is not possible


    var a=10;//
    var b=20;
    console.log("Sum of var a and var b : "+(a+b));
    var b=40;
    console.log("Sum of var a and var b : "+(a+b));


    let c=100;
    let d=200;
    console.log("Sum of  c and d  : "+(c+d));
    //  let c=150;     Redeclaration is not possible in let
    d=300;
    console.log("Sum of  c and d  : "+(c+d));      //Re-assiging is possible
 
    const e=10;
    const f=30;
    console.log("Sum of  e and f  : "+(e+f));
    f=20;    //re-declaration and re-assignment is not possible
    console.log(f);

