const input = document.getElementById("username");
const btn    = document.getElementById("Btn");
btn.addEventListener("click",()=>{
    if(input.value=="")
    {
        input.className="Wrong";
        input.setAttribute("placeholder","Fill this field!");
    }
    else{
        btn.className="success"
        btn.textContent="submitted sucesfully"
    }
})