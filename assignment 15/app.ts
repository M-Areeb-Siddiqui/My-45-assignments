/* Assignment-15: Changing Guest List: You just heard that one of your guests can’t make the 
dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the 
name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList: string[]= ["Naveed", "Haris", "Adeem"];
for (let i = 0; i < 3; i++){
}
let notComing = "Naveed";
let newGuest = "Kamran";
for(let i=0; i<guestList.length; i++){
    console.log("\n\nDear Sir "+ guestList [i]+"\n\nI'd like to invite you for a dinner party.\n\nThank you.");
}
console.log(`\nMr. ${notComing} will be unable to make it to the dinner party.`);
guestList.splice(0, 1, "Kamran");


