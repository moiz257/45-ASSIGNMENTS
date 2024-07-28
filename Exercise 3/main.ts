// Exercise 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person:string="moiz Ali";
console.log("Lowercase:",person.toLowerCase());
console.log("Uppercase:",person.toUpperCase());
console.log("Titlecase",person.replace(/\b\w/g, c=> c.toUpperCase()));
