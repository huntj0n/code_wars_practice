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

// function alphabetPosition(text) {
//   return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
// }

// function alphabetPosition(text) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';

//   return text.toLowerCase()
//              .split('')
//              .filter(t => letters.indexOf(t) > -1)
//              .map(t => letters.indexOf(t)+1 || '')
//              .join(' ');
// }

/////////////
// Tribonacci Sequence
// {6kyu}
////////////
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature, n) {
  let trib = signature;
  for (i = 3; i < n; i++) {
    trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
  }
  return trib.slice(0, n);
}

// function tribonacci(signature,n) {
//   const result = signature.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//   }
//   return result;
// }

// function tribonacci(s,n){
//   var arr = [];
//   for(var i=0; i<n; i++) {
//     arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
//   }
//   return arr;
// }

/////////////
// Sum of two lowest positive integers
// {7kyu}
////////////
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let [x, y] = numbers.sort((a, b) => a - b);
  return x + y;
}

// function sumTwoSmallestNumbers(numbers){
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };
// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a,b) => a - b);
//   return numbers[0] + numbers[1];
// };

// const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

/////////////
// Convert a string to an array
// {8 kyu}
////////////
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// function stringToArray(string) {
//   // code code code
//   return string.split(" ");
// }
const stringToArray = (string) => string.split(" ");

/////////////
// Square(n) Sum
// {8 kyu}
////////////
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9
function squareSum(numbers) {
  return numbers
    .map((n) => n * n)
    .reduce((total, n) => {
      return total + n;
    }, 0);
}
function squareSum_reduce(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

/////////////
// Duplicate Encoder
// {6 kyu}
////////////
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//ex:
//"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// const duplicateEncode = (word) => {
//   let newString = "";
//   word = word.toLowerCase() || word;
//   word.split("").filter((x, index) => {
//     if (word.indexOf(x) !== index) {
//       newString += ")";
//     } else if (word.lastIndexOf(x) !== index) {
//       newString += ")";
//     } else {
//       newString += "(";
//     }
//   });
//   return newString;
// };

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

/////////////
// Calculate Average
// {8 kyu}
////////////
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.
function findAverage(array) {
  // your code here
  if (array.length === 0) return 0;
  const average = array.reduce((total, item) => total + item) / array.length;
  return average;
}

const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
function find_average3(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
const find_average4 = (array) =>
  array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

/////////////
// Shortest Word
// {7 kyu}
////////////
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
const findShort = (s) =>
  Math.min.apply(
    this,
    s.split(" ").map((el) => el.length)
  );

const findShort2 = (s) => Math.min(...s.split(" ").map((el) => el.length));

function findShort3(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

/////////////
// Reduce but Grow
// {8 kyu}
////////////
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
const grow = (x) => x.reduce((acc, cur) => acc * cur);

/////////////
// String Ends With?
// {7 kyu}
////////////
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
  // TODO: complete
  if (typeof str != "string" || typeof ending != "string") {
    return false;
  } else {
    return str.toLowerCase().endsWith(ending.toLowerCase());
  }
}

function solutionWaySimpler(str, ending) {
  return str.endsWith(ending);
}

/////////////
// Convert boolean values to strings 'Yes' or 'No'.
// {8 kyu}
////////////
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = (bool) => (bool ? "Yes" : "No");
