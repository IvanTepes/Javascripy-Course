'use strict';

// ! Challenge
// * Find min/max value in array
// * Find all odd/even and round numbers
// * Count how many random odd/even and round numbers we have in array
// * Sort Array

// todo
// ? Create function to generate random number
// ? Store number in array
// ? Check numbers in array for odd/even and round numbers
// ? Store odd/even and round numbers in their array
// ? Use as many steps is needed

// Range of number we want to create
const MAX_NUMBER = 100;

// Amount of elements in array we want to create
const MAX_ELEMENTS = 40;

// Arrow function to get random number
const getRandomNumber = number => (number = Math.random() * MAX_NUMBER);

// Array to store random numbers
const arrayNumbers = [];

/* 
For Loop to create random numbers
and push created random number to
array numbers
*/

for (let i = 0; i < MAX_ELEMENTS; i++) {
    arrayNumbers.push(Math.trunc(getRandomNumber()));
}

console.log(`Number range 0 - ${MAX_NUMBER}`);
console.log(`Max number or numbers ${MAX_ELEMENTS}`);
console.log(`Random Generated numbers are:
${arrayNumbers}`);

// Variable to store min and max value
let min = arrayNumbers[0];
let max = arrayNumbers[0];

// For Loop to loop trough array and check for min/max value
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < min) {
        min = arrayNumbers[i];
    }

    if (arrayNumbers[i] > max) {
        max = arrayNumbers[i];
    }
}

console.log(`Max number in array is ${max}`);
console.log(`Min number in array is ${min}`);

// Array of whole/even/odd numbers
let whole = [];
let even = [];
let odd = [];

// For Loop to check if number remainder is 0
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 10 === 0) {
        whole.push(arrayNumbers[i]);
    } else if (arrayNumbers[i] % 2 === 0) {
        even.push(arrayNumbers[i]);
    } else {
        odd.push(arrayNumbers[i]);
    }
}

// Count of even and odd numbers in array
const countWhole = whole.length;
const countEven = even.length;
const countOdd = odd.length;

console.log(`Whole numbers are:
${whole}`);
console.log(`Even numbers are:
${even}`);
console.log(`Odd numbers are:
${odd}`);

console.log(`${countWhole} numbers are whole`);
console.log(`${countEven} numbers are even`);
console.log(`${countOdd} numbers are odd`);

// Arrow function to sort array
const sortArray = array =>
    array.sort(function (a, b) {
        return a - b;
    });

// Store sorted numbers in variable
let sortedWhole = sortArray(whole);
let sortedEven = sortArray(even);
let sortedOdd = sortArray(odd);

console.log(`Sorted Whole numbers are : ${sortedWhole}`);
console.log(`Sorted Even numbers are : ${sortedEven}`);
console.log(`Sorted Odd numbers are : ${sortedOdd}`);

// Remove all duplicates from sorted array
const removeDuplicates = array => [...new Set(array)];

// Removed duplicates from array
sortedWhole = removeDuplicates(whole);
sortedEven = removeDuplicates(even);
sortedOdd = removeDuplicates(odd);

console.log(`Whole after removed duplicates numbers are : ${sortedWhole}`);
console.log(`Even after removed duplicates numbers are : ${sortedEven}`);
console.log(`Odd after removed duplicates numbers are : ${sortedOdd}`);

// Total unique numbers created
const totalNumbers = sortedWhole.length + sortedEven.length + sortedOdd.length;

console.log(`Total unique numbers created: ${totalNumbers}`);
console.log(`Duplicate numbers created: ${MAX_ELEMENTS - totalNumbers}`);

// Connect all three arrays
const allNumbers = sortedWhole.concat(sortedEven, sortedOdd);

// Sort all numbers
const sortedAllNumbers = sortArray(allNumbers);

// Summary
console.log(`-----------------------------------------------

From ${MAX_ELEMENTS} randomly created numbers
in range from
0 - ${MAX_NUMBER}
there was:

${sortedWhole.length} whole numbers,
${sortedEven.length} even numbers and
${sortedOdd.length} odd numbers. 

Highest number created is: ${max}
and lowest number created is: ${min}.

There is ${totalNumbers} unique created numbers and
${MAX_ELEMENTS - totalNumbers} duplicate numbers.

${MAX_ELEMENTS} randomly created numbers are:

${sortedAllNumbers}

-----------------------------------------------
`);
