//Exercise: 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// creating a variable 
let apple = "apple";
// test for equality
// console.log("apple is equal to apple");
// console.log(apple=="apple");
// // test for inequality
// console.log("apple is not equal to apple");
// console.log(apple!="apple");
// // test for UpperCase
// let uppercase="APPLE"
// console.log("APPLE is equal to apple after converting into LowerCase");
// console.log(uppercase.toLocaleLowerCase()=="apple");
// console.log("APPLE is not equal to apple after converting into LowerCase");
// console.log(uppercase.toLocaleLowerCase()!="apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;
// // equal to
// console.log("ten is equal to twenty");
// console.log(ten==twenty);
// // is not equal to
// console.log("ten is not equal to twenty");
// console.log(ten!=twenty);
// // greater than
// console.log("twenty is greater than ten");
// console.log(twenty>ten);
// // less than
// console.log("twenty is less than ten");
// console.log(twenty<ten);
// // greater than or equals to
// console.log("twenty is greater than or equals to");
// console.log(twenty>=ten);
// // less than or equals to
// console.log("twenty is less than or equals to");
// console.log(twenty<=ten);
// / • Tests using "and" and "or" operators
// using and (&&) operator
// console.log("twenty is not equals to ten and twenty is greater than ten");
// console.log(twenty!=ten && twenty>ten);
// console.log("twenty is not equals to ten and ten is  greater than twenty");
// console.log(twenty!=ten && ten>twenty);
// // using or (||) operator
// console.log("twenty is greater than ten or twenty is equals to twenty");
// console.log(twenty>ten || twenty==twenty);
// console.log("twenty is less than ten or twenty is not equals to twenty");
// console.log(twenty<ten || twenty!=twenty);
// • Test whether an item is in a array
let fruits = ["apple", "orange", "mango"];
console.log("mango is included in my fruits");
console.log(fruits.includes("mango"));
// • Test whether an item is not in a array
console.log("mango is not included in my fruits");
console.log(!fruits.includes("mango"));
export {};
