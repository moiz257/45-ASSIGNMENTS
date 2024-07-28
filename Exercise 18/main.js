// Exercise 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// • Storing the locations in a array. Make sure the array is not in alphabetical order.
let placesTovisit = ["Pakistan", "India", "Turkey", "Amsterdam", "Edinburg"];
// • Printing an array in its original order.
console.log("Original Order:", placesTovisit);
// • Printing an array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", placesTovisit.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log("Original Order After Sorting:", placesTovisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", placesTovisit.slice().sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original Order After Reverse:", placesTovisit);
// • Reverse the order of your list.
placesTovisit.reverse();
console.log("Resverse Order:", placesTovisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesTovisit.reverse();
console.log("Back To Original Order:", placesTovisit);
// Sort your array so it’s stored in alphabetical order.
placesTovisit.sort();
console.log("Sorted In Alphabetical Order:", placesTovisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesTovisit.sort().reverse();
console.log("Sorted In Reverse Alphabetical Order:", placesTovisit);
export {};
