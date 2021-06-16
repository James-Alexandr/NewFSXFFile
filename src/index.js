import React from 'react';
import emojipedia from "./emojipedia.js";

// console.log(emojipedia);

// var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.findIndex(function (num) {
//     return num > 9;
// });

// console.log("Hello world " + newNumbers);
let counter = 0;
console.log(emojipedia.map(function (x) {

    counter++;
    console.log(counter + "-" + x.meaning.substring(0, 100));
}))

// function double(x) {
//     return x * 2;
// }

// console.log(numbers.map(double));

// numbers.forEach(function (x) {
//   console.log("I am for each " + x);
// });

// const Newnum = numbers.filter(function (num) {
//   return num < 10;
// });
// console.log("I am filter " + Newnum);

// const placeHolder = [];

// numbers.forEach(function (num) {
//   if (num < 10) {
//     placeHolder.push(num);
//     console.log("I am place holder " + placeHolder);
//   }
// });

// const newNumbers = numbers.reduce(function (accumulator, current) {
//   console.log("Var One " + accumulator);
//   console.log("Var Two " + current);
//   return accumulator + current;
// });



//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
