// String is a sequence of characters used to represent text.
// Strings are immutable, meaning once created, they cannot be changed

const name = 'charan';
console.log(typeof name);

const greeting = new String('Hello, World!');
console.log(typeof greeting); // Output: Object

const sampTxt = "Gurram";
// Length
console.log(sampTxt.length);

// Accesing Characters

console.log(sampTxt.charAt(3));
console.log(sampTxt.charCodeAt(3));    //returns asky value


// concatination

const fname='Sri';
const lname ='charan';
console.log(fname.concat(" ",lname));

// Indexing :
console.log(sampTxt[2]);
console.log(sampTxt.indexOf("r"));        
console.log(sampTxt.lastIndexOf("r"));     // returns from last


// Searching :
console.log(sampTxt.includes("a"));
console.log(sampTxt.startsWith(" G"));
console.log(sampTxt.endsWith("n"));

// Extracting Substrings :
console.log(sampTxt.slice(2, 5));
console.log(sampTxt.substring(2, 5));

// slice vs substring the difference is that slice can accept negative indices, while substring cannot.
Text="Java"
console.log(Text.slice(-4,4));

// Trimming
const Txt="    hello     ";
console.log(Txt.length);
console.log(Txt.trim());
console.log(Txt.trim().length);
const trimstrat = Txt.trimStart();
console.log(trimstrat.length);

// Replacing
// Splitting :
const csvData = "apple-banana-cherry";
console.log(csvData.split("-"));

// Changing Case :
console.log(sampTxt.toLowerCase());
console.log(sampTxt.toUpperCase());


