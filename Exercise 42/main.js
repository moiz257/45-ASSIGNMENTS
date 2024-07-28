"use strict";
//Exercise:42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Ali", "Moiz", "Qaiser"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);
