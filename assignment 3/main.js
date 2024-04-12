/*Assignment-3: Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase.*/
var sentence = "i am Learning typescript";
//lower case
var lowercaseName = sentence.toLowerCase();
console.log(lowercaseName);
//UPPER CASE
var uppercasecaseName = sentence.toUpperCase();
console.log(uppercasecaseName);
//Title Case
//Step-1
var words = sentence.split(" ");
//Step-2
var titlecaseName = "";
//Step-3
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    console.log(titlecaseName);
}
