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

/////////////
// Categorize New Member
// {7 kyu}
////////////
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior1(data) {
  // ...
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

const openOrSenior = (data) =>
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));

/////////////
// Grasshopper - Grade Book
// {8 kyu}
////////////
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade(s1, s2, s3) {
  // Code here
  const avg = (s1 + s2 + s3) / 3;

  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else {
    return "F";
  }
}
function getGrade2(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

function getGrade3(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}

/////////////
// Grasshopper - Personalized Message
// {8 kyu}
////////////
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
function greet2(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}

/////////////
// Persistent Bugger.
// {6 kyu}
////////////
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
  //code me
  let result = 0,
    str = String(num);
  while (str.length > 1) {
    str = String([...str].reduce((prev, cur) => prev * cur));
    result++;
  }
  return result;
}

function persistence2(num) {
  let times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

/* This function will calculate the multiplication of the digit of the number
 * given as parameter
 */
function multiplyDigits(num) {
  // If have just 1 digit number, we just return it
  if (num < 10) {
    return num;
    // If more than one digit, will be first digit * recursive call to this function
  } else {
    let firstDigit = Math.floor(num / 10);
    return (num - firstDigit * 10) * multiplyDigits(firstDigit);
  }
}

/**
 * This function will count on the number of times we have to call multiply
 * till we don't have any more times to call ( we just have one digit )
 */
function count(num, times = 0) {
  if (num < 10) {
    return times;
  } else {
    // 999 = 9 * 9 * 9 = 729, ...
    return count(multiplyDigits(num), ++times);
  }
}
/**
 * Just the public function we call in order to count the number of times
 * we have to multiply the digits of the param number till we have just
 * one digit as result
 */
function persistence(num) {
  return count(num);
}

/////////////
// How good are you really?
// {8 kyu}
////////////
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//went along these lines to calculate the average while including yourPoints as is mentioned in the Note, never worked
// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   let average =
//     classPoints.reduce(function (sum, cur) {
//       return sum + cur;
//     }, 0) /
//     ((average + yourPoints) / classPoints.length + 1);
//   return yourPoints > average ? true : false;
// }

const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((prev, curr) => prev + curr) / classPoints.length <
  yourPoints;

//this is what I think it should be. your score would raise or lower the average. I dont like this kata.
// const betterThanAverage2 = (classPoints, yourPoints) =>
//   (classPoints.reduce((prev, curr) => prev + curr) + yourPoints) /
//     classPoints.length +
//     1 <
//   yourPoints;

/////////////
// Number of People in the Bus
// {7 kyu}
////////////
//There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
const numberForLoop = function (busStops) {
  // Good Luck!
  let result = 0;
  for (let i = 0; i < busStops.length; i++) {
    result += busStops[i][0] - busStops[i][1];
  }
  return result;
};

const number = (busStops) =>
  busStops.reduce((prev, [on, off]) => prev + on - off, 0);
//regular reduce  with  {(previous, current) and initial}, instead of current you destructure the nested array to pull out the number of riders getting on and those getting off. EZPZ

/////////////
// Youre a square!
// {7 kyu}
////////////
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
var isSquareLONG = function (n) {
  if (n < 0) return false;
  for (let i = 0; i <= n; i++) {
    if (i ** 2 == n) return true;
    else continue;
  }
  return false;
};
//Math.sqrt(n) is a lot faster. basically if theres a remainder it cant be a square root.
const isSquare = (n) => Math.sqrt(n) % 1 == 0;

/////////////
// Counting Sheep...
// {7 kyu}
////////////
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
function countSheepsFORLOOP(sheep) {
  let result = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) result++;
    else continue;
  }
  return result;
}

const countSheepsBOOLEAN = (sheep) => sheep.filter(Boolean).length;
const countSheeps = (sheep) => sheep.filter((s) => s).length;

/////////////
// Count by X
// {8 kyu}
////////////
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

const countBy = (x, n) =>
  Array.from({ length: n }, (_, index) => x + index * x);

function countBy2(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

const countBy3 = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

/////////////
// Your order, please
// {6 kyu}
/////////////
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
  return words
    .split(" ")
    .sort((first, second) => {
      return first.match(/\d/)[0] - second.match(/\d/)[0];
    })
    .join(" ");
}

var reg = /\d/;
function order1(words) {
  return words.split(" ").sort(comparator).join(" ");
}
function comparator1(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg);
}

/////////////
// Count of positives/sum of negatives
// {8 kyu}
/////////////
/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegativesMINE(input) {
  // your code here
  let count = 0;
  let sum = 0;
  input.map((x) => {
    if (x === 0) sum = sum;
    if (x === 0) count = count;
    else x > 0 ? count++ : (sum += x);
  });
  return [count, sum];
}

function countPositivesSumNegatives1(input) {
  let result = [0, 0];
  if (input === null || input.length === 0) return [];

  for (let i of input) {
    if (i > 0) result[0]++;
    else result[1] += i;
  }

  return result;
}

function countPositivesSumNegatives2(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
