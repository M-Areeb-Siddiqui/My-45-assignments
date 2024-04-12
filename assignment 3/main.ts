/*Assignment-3: Name Cases: Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase.*/

let sentence : string= "i am Learning typescript";
//lower case
let lowercaseName: string= sentence.toLowerCase();
console.log(lowercaseName);

//UPPER CASE
let uppercasecaseName: string= sentence.toUpperCase();
console.log(uppercasecaseName);

//Title Case
//Step-1
let words:string[]= sentence.split(" ");
//Step-2
let titlecaseName: string= ""
//Step-3
for (let i = 0; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() + " "
    console.log(titlecaseName);
    
}