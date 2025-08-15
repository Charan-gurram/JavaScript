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

// 3 . Bank interst rates

let borrower1 =
{
    amount: 1100000,
    creditscore: 805,
    govtemployee: true
};
let borrower2 =
{
    creditscore: 700,
    income: 60000,
    govtemployee: true

};
let borrower3 =
{
    creditscore: 700,
    income: 60000,
    govtemployee: true

};
let borrower4 =
{
    isdec: true
};
function bankloan(customer)
{
    if (customer.amount > 1000000 && customer.creditscore > 800) 
    {
        if (customer.govtemployee) {
            console.log("interst rate is reduced by 0.5% so your interst rate is now 6.5%" )
        }
        else
            console.log("Your interst rate is 7%")

    }
    else if ((customer.creditscore > 650 && customer.creditscore < 800) && customer.income > 50000)
     {
        if (customer.govtemployee)
            console.log("interst rate is reduced by 0.5% so your interst rate is now 8.5%" )
        else
            console.log("Your interst rate is 9 %")
    }
    else if(customer.isdec)
    {
        console.log("your interst rate is discounted by 1%")
    }
    else
    {
        console.log("Need to take loan amount")
    }
}

// bankloan(borrower1);
// bankloan(borrower2);
// bankloan(borrower3);
// bankloan(borrower4);
