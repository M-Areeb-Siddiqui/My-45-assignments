/* Assignment-11.Names: Store the names of a few of your friends in a array called names. Print each person’s 
name by accessing each element in the list, one at a time.*/
let members: string[]= ["Ali", "Ahmed", "Naveed", "Adeem", "Asad"];
/*for(let i = 0; i < 5; i++){
console.log(members[i]);
}*/

/* Assignment-12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
name, print a message to them. The text of each message should be the same, but each message should be 
personalized with the person’s name.*/
let message: string= "Friends forever-";
for(let i = 0; i < 5; i++) {
console.log(message + members [i]);
}

