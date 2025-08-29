// creating an element 

let newelement = document.createElement("li");
console.log(newelement);

let python = document.createElement("li");
console.log(python)

const java =document.createElement("li");
console.log(java)

// Adding content to the created element

python.innerText="python"
python.textContent="python -3"   //Latest updation will be printed 
java.innerText="Java-8.0"

// Adding an element to the existing DOM tree after creating new elememnt by accesing parent

const courselist = document.getElementById("courselist")

courselist.append(python)   //adds at the end

courselist.prepend(java)    //adds at the beginning

// Adding an element using insert before

const twcss=document.createElement("li");
twcss.innerText="tailwind-css"
courselist.insertBefore(twcss,jslist)

// Adding an element using insertAdjacent
// insertAdjacentElement(position, element)

const rct=document.createElement("li");
rct.innerText="React Js"
python.insertAdjacentElement("beforebegin",rct)

// Adding an element to the existing DOM tree without creating new elememnt by using innnerHTML

// courselist.innerHTML+="<li>Bootstrap</li>"

// Modifying an existing data

jslist.innerText="javascript"

// Replace with
// replaceWith(new)

const js=document.getElementById("jslist")
const tps=document.createElement("li");
tps.innerText="Typescript"
js.replaceWith(tps);

// Replace child
// replaceChild(new, old)
const ruby=document.createElement("li");
ruby.innerText="Ruby-lng"
courselist.replaceChild(ruby,python)
// console.log(courselist.innerText)

// Deleting an element from the tree

tps.remove();

// deleting an child from parent

courselist.removeChild(twcss);