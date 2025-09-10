const sub=document.getElementById("sub")
const fmsg=document.getElementById("fmsg")
const patterns = {
    name: /^[a-zA-Z]{5,20}$/,
    mobpattern: /^[6-9]{1}[0-9]{9}$/,
    aadharpattern: /^[3-9][0-9]{3}[0-9]{4}[0-9]{4}$/,
    emailpattern: /^[a-zA-z][a-zA-Z0-9_.]+@[a-zA-Z]+\.(com|in|org|net)$/,
    pwpattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$.]).{8,12}$/
};
function validateField(inputId, msgId, pattern, errorText,) {
    const input = document.getElementById(inputId);
    const msg = document.getElementById(msgId);

    input.addEventListener("blur", () => {
        if (!pattern.test(input.value)) {
            msg.textContent = errorText;
            msg.style.color = "red";
        }
        else {
            msg.textContent = "";
        }
    })
    return () => pattern.test(input.value);
}
const checkname = validateField("name", "namemsg", patterns.name, "Name must be 5 characters long");
const checkmobpattern = validateField("phn", "phnmsg", patterns.mobpattern, "Mobile number should be 10 digits");
const checkaadharpattern = validateField("aadhar", "aadharmsg", patterns.aadharpattern, "Enter 12 digit Aadhar");
const checkemailpattern = validateField("email", "emailmsg", patterns.emailpattern, "Enter correct mail");
const checkpwpattern = validateField("pwd", "pwdmsg", patterns.pwpattern, "Password must contain one lowercase ,uppercase,number and special character and lenghth of min 8char");
sub.addEventListener("click",(e)=>{
    if(!checkname()|| ! checkmobpattern()|| !checkaadharpattern() ||! checkemailpattern()|| ! checkpwpattern())
    {
        e.preventDefault();
        fmsg.textContent="Fill all details"
        fmsg.style.color="red";
    }
    else
    {
        fmsg.textContent="Form submitted succesfully"
        fmsg.style.color="grren"
    }
})

