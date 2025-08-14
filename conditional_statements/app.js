/* if
if-else
else-if ladder
switch case */

// if 

let pstatus="success";

if(pstatus=="success")
{
    console.log("Payment success");
}

// if-else

let age=20;
if(age>=18)
{
    console.log("elgible for voting");
}
else
    console.log("not elgible to vote")

// else-if ladder

let total=900;

if(total<=1000)
{
    console.log("you got a discount of 10%")

}
else if(total <=9999)
{
    console.log("you got a discount of 25%")
}
else if(total<19999)
{
    console.log("you got a disconut of 40%")
}
else
{
    console.log("make purchase and get discounts")
}

// switch-case

let day=5;
switch(day)
{
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log("Tuesday");
    case 4:
        console.log("Wednesdsy");
    case 5:
        console.log("Thursday");
    case 6:
        console.log("friday");
    case 7:
        console.log("saturday");
    default:
        console.log("invalid number entered");

}