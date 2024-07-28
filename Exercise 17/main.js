"use strict";
// Exercise 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ["haji dada", "altaf", "ameen", "zaheer", "najma", "salma", "abida"];
console.log("\n\tUnfortunately, your new dinner table will not arrive in time for the dinner you can add only two guest.\n\t ");
// removing guest form list one at a time.
while (guestList.length > 2) {
    let RemoveGuest = guestList.pop();
    if (RemoveGuest !== undefined) {
        console.log(`Sorry ${RemoveGuest}, You are not invited at the dinner table`);
    }
}
// Printing a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest => {
    console.log(`\nDear ${guest}, Your are still invited to the dinner table.`);
});
// Removing the last two names from your list
guestList.splice(0, guestList.length);
// Printing the list to make sure you actually have an empty list at the end of your program.
console.log("\nUpdated guest list :", guestList);
