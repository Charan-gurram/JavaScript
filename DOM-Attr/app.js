const profilepic = document.createElement("img");
// Creating Attributes in the js by using DOM
profilepic.setAttribute("src","https://images.pexels.com/photos/32603590/pexels-photo-32603590.jpeg");
profilepic.setAttribute("alt","Pillars")

const profcontainer = document.getElementById("container");
profcontainer.append(profilepic)

// Adding class attribute to the existing element

profilepic.className="pfpic";
profilepic.classList.add("pfpic1")  // It will add extra class to the existing element