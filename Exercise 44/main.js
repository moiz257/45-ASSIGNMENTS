"use strict";
//Exercise:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("\nMaking sandwich with the following items:\n");
    items.forEach(SingleItems => console.log(SingleItems));
    console.log("\tEnjoy the sandwich!");
}
make_sandwich("Bread", "Butter");
make_sandwich("Chicken", "Cheese", "Egg");
make_sandwich("Chicken", "Cheese", "Egg", "Bread", "Butter", "Mayo");
