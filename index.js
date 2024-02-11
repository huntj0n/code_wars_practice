"use strict";

//OPPOSITES ATTRACT
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // moment of truth
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }

// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }

// function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 == 1;
//   }

//----------------------------------------------------------------
//CONVERT NUMBERR TO REVERSED ARRAY OF DIGITS
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let num = 35231;

function digitize(n) {
  //code here
  //   const reversed = n.toString().split("").reverse().map(Number);
  //   return reversed;
  return String(n).split("").map(Number).reverse();
}

digitize(num);

//HIGHEST AND LOWEST
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  // ...
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//Sum of Numbers
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
  //Good luck!
  const min = a < b ? a : b;
  const max = a < b ? b : a;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }

//
// Simple Multiplication

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  // your code........
  return number % 2 === 0 ? number * 8 : number * 9;
}
//function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

//
//ISOGRRAM
//
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  //...
  chars = [];
  for (let i = 0; i < str.length; i++) {
    const newChar = str[i].toLowerCase();
    if (chars.find((char) => char === newChar)) {
      return false;
    }
    chars.push(newChar);
  }
  return true;
}

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }
// //z.

//////////////
// You Can't Code Under Pressure #1 //
// {8}kyu
//////////////
//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

/////////////
// Remove first and last letter
// {8kyu}
////////////
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
}

/////////////
// Calculate BMI
// {8kyu}
////////////
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmi = weight / (height * height);
  let result;
  if (bmi <= 18.5) result = "Underweight";
  if (bmi <= 25 && bmi > 18.5) result = "Normal";
  if (bmi <= 30 && bmi > 25) result = "Overweight";
  if (bmi > 30) result = "Obese";
  return `${result}`;
}
// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

/////////////
// Replace With Alphabet Position
// {6kyu}
////////////
// Instructions
// Output
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
function alphabetPosition(text) {
  let chari,
    arr = [],
    alphabet = "abcdefghijklmnopqrstuvwxyz",
    i;

  for (let i = 0; i < text.length; i++) {
    chari = text[i].toLowerCase();
    if (alphabet.indexOf(chari) !== -1) {
      arr.push(alphabet.indexOf(chari) + 1);
    }
  }
  return arr.join(" ");
}
