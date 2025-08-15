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

// 4.e-commerce website

// let ordervalue = 2500,
//     samecity= true,
//     ispriority = true,
//     samestate=true;
//     isprem=true;
//     weekendorder=true;
let order1=
{
    ordervalue : 2500,
    samecity: true,
    ispriority : true,
    samestate:true 
};
let order2=
{
    ordervalue : 5500,
    samecity: false,
    samestate:true 
};
let order3=
{
    isprem:true,
    weekendorder:true,
    samecity: false,
    samestate:false 
};
function shippingcharges(orderdetails)
{
    if(orderdetails.samestate && orderdetails.samecity && orderdetails.ispriority)
{
    if(orderdetails.ordervalue>2000)
    {
        console.log("elgible for free delivery");
    }
    else
    {
        console.log("Shiiping charges : Rs.50")
    }
}
 else if(orderdetails.samestate)
{
    if(!orderdetails.samecity)
    { 
         if(orderdetails.ordervalue>5000)
    {
        console.log("elgible for free delivery");
    }
    else
    {
        console.log("Shiiping charges : Rs.100")
    }
    }
}
else
{
    if(orderdetails.isprem && orderdetails.weekendorder)
    {
        console.log("your shipping fee is reduced to 100rs")
    }
    else
    {
         console.log("your shipping fee is 200rs")
    }
}
}
// shippingcharges(order1);
// shippingcharges(order2);
// shippingcharges(order3);

// 5.Gym monthly fees

let person1 ={
    gold:true,
    attend:21,   
}; 
let person2 ={
    silver:true,
    attend:16,  
    upi:true, 
};
let person3 ={
    bronze:true,
    attend:21,   
    debit:true
};

function gym(persondetails)
{
if(persondetails.gold && persondetails.attend>20)
{
    console.log("you got cashback of 500")
}
else if(persondetails.silver && persondetails.attend >15 && persondetails.upi)
{
    console.log("you got cashback of 300")
}
else if(persondetails.bronze &&persondetails. attend>10 &&persondetails.debit)
{
    console.log("you got cashback of 100") 
}
}
// gym(person1)
// gym(person2)
// gym(person3)

// 6.coffe shop
let cupprice,addonprice;
let cup1=
{
    size:"small",
    addon:"flavored syrup"
}
let cup2=
{
    size:"large",
    addon:null
}
let cup3=
{
    size:"medium",
    addon:"whipped cream"
}
function coffebill(coffedetails)
{
switch(coffedetails.size)
{
    case "small":
        console.log("small sized cup cofee price is 50");
        cupprice=50;
        break;
    case "medium":
        console.log("medium sized cup cofee price is 100");
        cupprice=100;
        break;
    case "large":
        console.log("large sized cup cofee price is 150");
        cupprice=150;
        break;
    case "extra-large":
        console.log("extra-large sized cup cofee price is 200")
        cupprice=200;
        break;
    default :
        console.log("select cup size");
}
switch(coffedetails.addon) 
{
    case "xtra shot":
        console.log("Extra shot price is ₹30");
        addonprice = 30;
        break;
    case "flavored syrup":
        console.log("Flavored syrup price is ₹25");
        addonprice = 25;
        break;
    case "whipped cream":
        console.log("Whipped cream price is ₹20");
        addonprice = 20;
        break;
    case null:
        console.log("no addon selected")
        addonprice=0;
        break;
    default:
        console.log("select addon");
}
let totalbill=cupprice+addonprice;
console.log(`Totalbill of ${coffedetails.size} cup with add on ${coffedetails.addon} is : ${totalbill}`);
}
coffebill(cup1);
coffebill(cup2);
coffebill(cup3);
