"use strict";
// Exercise: 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, messagePrint) {
    console.log(`You selected a ${size} size of ${messagePrint} printed shirt.`);
}
make_shirt("Medium", "Hello World");
