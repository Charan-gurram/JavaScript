const dbtn = document.getElementById("btn");

dbtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) 
    {
        dbtn.textContent = "Enable Light Mode";
    } else
    {
        dbtn.textContent = "Enable Dark Mode";
    }
});
