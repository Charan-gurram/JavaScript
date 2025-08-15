// 1 .Theme-park

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

// 2.Food delivery app

let orderamount=2000,
    ispremium=false,
    couponused=true;
    issunmng=false;
if(orderamount>1000)
{
    if(ispremium)
    {
        console.log("You got free delivery and 15% discount")
    }
    else
    {
         console.log("You got free delivery and 10% discount")
    }
}
else if(orderamount>500)
{
    if(weekday && time>6 && couponused)
    {
        console.log("you got discount of 100rs")
    }
    else
        {
             console.log("No discount")
        }
}
else
     {
        if(issunmng)
        {
            console.log("YOu got only free delivery")
        }
        else
        {
            console.log("You are not elgible for free delivery")
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

bankloan(borrower1);
bankloan(borrower2);
bankloan(borrower3);
bankloan(borrower4);

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
shippingcharges(order1);
shippingcharges(order2);
shippingcharges(order3);

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

// 6 . Mobile recharge plan

let plantype="Datapack";
let validity=0,specweek=true;
switch(plantype)
{
    case "Talktime":
        validity+=10;
        break;
    case "Datapack":
        validity+=1;
        break;
    case "combopack":
        validity+=20;
        break;
    case "Unlimited":
        validity+=30;
        break;
    default:
        console.log("select a valid plan");
}
if(specweek)
{
    validity+=2;
    console.log("your plan has validity : "+validity+ " days");
}

// 8 . Restaurant bill

let time="breakfast"
let type="dosa"
let bill=0;
switch(time)
{
    case "breakfast":
        switch(type)
        {
            case "dosa":
                bill+=80;
                break;
            case "idly":
                bill+=50;
                break;
            case "paratha":
                bill+=60;
                break;
            default:
                console.log("no such item");
        }
        break;
    case "Lunch":
        switch(type)
        {
             case "Veg biryani":
                bill+=250;
                break;
            case "Veg Thaali":
                bill+=150;
                break;
            case "Chicken pulav":
                bill+=200;
                break;
            default:
                console.log("no such item");
        }
        break;
    case "Dinner":
        switch(type)
        {
             case "Pulka":
                bill+=100;
                break;
            case "Veg Thaali":
                bill+=150;
                break;
            case "Sambar Rice":
                bill+=150;
                break;
            default:
                console.log("no such item");
        }
        break;
}
console.log(`You have selected ${type} for ${time} `)
console.log(`Total bill is : ${bill}`)

// 9.University Library fines

let genre="fiction";
let fine=0,student=false;
let overduedays=2;
switch(genre)
{
    case "fiction":
        fine+=10;
        if(student)
           fine = fine - (fine * 50 / 100);
        break;
    case "reference":
        fine+=20;
        if(student)
            fine = fine - (fine * 50 / 100);
        break;
    case "comic":
        fine+=25;
        if(student)
             fine = fine - (fine * 50 / 100);
        break;
}
console.log(`you have overdue on ${genre} book and total fine is ${fine}`)

// 10. Movie booking bill

let category="balcony",weekend=true,mbill=0;
switch(category)
{
    case "Standard":
        bill+=100;
        if(weekend)
            mbill=mbill+(mbill*20/100);
        break;
    case "premium":
        mbill+=200;
        if(weekend)
            mbill=mbill+(mbill*20/100);
        break;
    case "vip":
        mbill+=300;
        if(weekend)
            mbill=mbill+(mbill*20/100);
        break;
    case "balcony":
        mbill+=50;
        if(weekend)
            mbill=mbill+(mbill*20/100);
        break;
    default:
        console.log("select any seat");
}
console.log(`You selectd ${category} and price is ${mbill}`)

// 11.Grading based on percentge

let perc=49,grade,finalyear=true;
if (perc>=90)
    grade='A';
else if (perc>=80)
    grade='B';
else if (perc>=70)
    grade='C';
else if (perc>=60)
    grade='D';
else if (perc>=50)
   grade='E';
else if (perc<=50)
{
    if(finalyear)
    {
        console.log("you have a chance for revaluation as you are final year student")
    }
    else
        grade='Fail'
}
console.log(`you got ${perc} percentage and your grade is ${grade}`)

// 12.company bonuses

let Eox=1,bonus=0,December=true;
if(Eox>=15)
{
    bonus+=50000;
    
}
else if(Eox>=10)
{
    bonus+=30000
}
else if(Eox>=5)
{
    bonus+=20000
   
}
else if(Eox>=2)
{
    bonus+=10000
   
}
else if(Eox>0)
{
    bonus+=5000
    
}
if(December)
{
    bonus+=2000;
}
console.log(`Your bonus is ${bonus} as you have ${Eox} years of experience`)

// 13.Temperature predictor

let temp=40,weather,raining=false;
if(temp>=40)
{
     weather="very hot";

}
else if (temp>=30)
{
     weather="hot";
}
else if (temp>=20)
{
     weather="warm";
}
else if (temp>=10)
{
     weather="cool";
}
    
else if (temp>=0)
{
     weather="cold";
}
if(raining)
        weather+=" and Raining";
console.log(`Weather  is ${weather} and temperature is ${temp} `)
    
// 14.online store discount 

let tvalue=20000,bday=true,discount=0;
if(tvalue>=20000)
{
    discount=25;
   
}
else if(tvale>=15000)
{
 discount=20;

}
else if(tvale>=10000)
{
 discount=15;
}
else if(tvale>5000)
{
 discount=10;
    
}
else
{
    discount="none"
}
if(bday)
{
        discount+=5
        console.log(`You got a discount of additional 5% and total discount ${discount}`)
}
else
{
console.log(`You got a discount of ${discount}`)
}

// 15 . Marathon running 
let hours=4.9,mage=19,badge;
if(hours<2)
{
    badge="elite"
}
else if(hours<3)
{
    badge="advanced"
}
else if(hours<4)
{
    badge="Intermediate"
}
else if(hours<5)
{
    badge="Beginner"
}
else if(hours>5)
{
    badge="novice"
}
if(mage<18)
{
    badge+=" and youth"
}
console.log(`You got ${badge} medal as you have completed maarathon in ${hours} hours`)

