const fname =document.getElementById("name");
const mob= document.getElementById("phn");
const aadhar=document.getElementById("aadhar");
const submit=document.getElementById("sub");
const email=document.getElementById("email");
const msg=document.getElementById("msg");
const namepattern= /^[a-zA-Z][a-zA-Z]{5,20}$/;
const mobpattern = /^[6-9]{1}[0-9]{9}$/;
const aadharpattern = /^[3-9][0-9]{3}[0-9]{4}[0-9]{4}$/;
const emailpattern= /^[a-zA-z][a-zA-Z0-9_.]+@[a-zA-Z]+\.(com|in|org|net)$/;
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    msg.textContent = "";
    msg.style.color = "";
if (!namepattern.test(fname.value)) 
{
    msg.textContent = "Enter valid firstname";
    msg.style.color="red";
    return;
}
if(!mobpattern.test(mob.value))
{
    msg.textContent = "Enter correct mobile number";
    msg.style.color="red";
    return;
}
if(!aadharpattern.test(aadhar.value))
{
    msg.textContent = "Enter 12 digit aadhar numebr";
    msg.style.color="red";
    return;
}
if(!emailpattern.test(email.value))
{
    msg.textContent = "Enter coorect mail";
    msg.style.color="red";
    return;
}
msg.textContent="Form submitted succesfully";
msg.style.color="green";
})
