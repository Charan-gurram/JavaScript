// Theme-park

 let age = 35;
let price = 1000;
let fin_price, disc;
let vtype = "student", vproof = "ID", notdec = true;
let week_days = true, notfestweeks = true;
let sunday = false;
if (age < 25) //Logic for students under 25 years
{
    if (vtype == "student" && vproof == "ID" && notdec) {
        dis = 20;
        fin_price = price - price * (dis / 100);
        console.log(`final price for student is ${fin_price}`)
    }
}
else if (age <= 60)  //for middle aged
{
    if (sunday) {
        dis = 10;
        fin_price = price - price * (dis / 100);
        console.log(`final price for middle aged  is ${fin_price}`)
    }
    else {
        console.log(`final price for middle aged is ${price}`)
    }
}
else     //for age above 60
{
    if (week_days && notfestweeks) {
        dis = 30;
        fin_price = price - price * (dis / 100);
        console.log(`final price for ${age} aged elder is ${fin_price}`)
    }
}

