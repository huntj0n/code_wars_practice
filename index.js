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

/////////////
// Are you playing banjo?
// {8 kyu}
/////////////
/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/
function areYouPlayingBanjo(name) {
  // Implement me
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

function areYouPlayingBanjo2(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

/////////////
// Rock, Paper, Scissors
// {8 kyu}
/////////////
/*
Create a function which answers the question "Are you playing banjo?".
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  const one = "Player 1 won!";
  const two = "Player 2 won!";
  const draw = "Draw!";

  if (p1 === "scissors" && p2 === "paper") return one;
  if (p1 === "scissors" && p2 === "rock") return two;

  if (p1 === "paper" && p2 === "rock") return one;
  if (p1 === "paper" && p2 === "scissors") return two;

  if (p1 === "rock" && p2 === "scissors") return one;
  if (p1 === "rock" && p2 === "paper") return two;
  else return draw;
};

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

/////////////
// Build a pile of Cubes
// {6 kyu}
/////////////
/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
�
3
n 
3
 , the cube above will have volume of 
(
�
−
1
)
3
(n−1) 
3
  and so on until the top which will have a volume of 
1
3
1 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
n^3+(�−1)3+(�−2)3+...+13=�n 3 +(n−1) 3 +(n−2) 3 +...+1 3 =m 
if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/
const findNb = (m) => {
  let total = 0;
  let n = 0;

  while (total < m) {
    n += 1;
    total += n ** 3;
  }

  return total === m ? n : 0;
};

function findNb2(m) {
  let n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}

/////////////
// The highest profit wins!
// {7 kyu}
/////////////
/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/
const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

/////////////
// L1: Set Alarm
// {8 kyu}
/////////////
/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
const setAlarm = (employed, vacation) => {
  if (employed === true && vacation === false) return true;
  else return false;
};

//was really close to this second one myself but was adding a bit so it didnt work. But was on the right track
const setAlarm2 = (employed, vacation) => employed && !vacation;

/////////////
// Quarter of the year
// {8 kyu}
/////////////
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/
const quarterOf = (month) => {
  if (month <= 3) return 1;
  else if (month <= 6) return 2;
  else if (month <= 9) return 3;
  else return 4;
};

const quarterOf2 = (month) => Math.ceil(month / 3);

/////////////
// Two Sum
// {6 kyu}
/////////////
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/
function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}

function twoSum2(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i],
      y = target - x;
    if (seen.has(y)) return [seen.get(y), i];
    seen.set(x, i);
  }
}

/////////////
// Testing 1-2-3
// {7 kyu}
/////////////
/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

//change variable to number in the kata or this wont work (but cant save it as number error free)
const numbering = (arr) => {
  const spacing = [];
  for (i = 0; i < arr.length; i++) {
    spacing.push(`${i + 1}: ${arr[i]}`);
  }
  return spacing;
};

const numbering2 = (a) => a.map((v, i) => `${i + 1}: ${v}`);

/////////////
// Bouncing Balls
// {6 kyu}
/////////////
/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/
function bouncingBall(h, bounce, window) {
  if (bounce === -1) return -1;
  if (h > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h = h * bounce;
    }
    return count;
  } else {
    return -1;
  }
}

function bouncingBall2(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

/////////////
// Remove exclamation marks
// {8 kyu}
/////////////
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
const removeExclamationMarks = (s) => s.replace(/\!/g, "");

function removeExclamationMarks2(s) {
  return s.replaceAll("!", "");
}

/////////////
// Mexican Wave
// {6 kyu}
/////////////
/*
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

TASK:
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

 wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

 */
function wave(string) {
  let result = [],
    i;

  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") continue;
    result.push(
      Array.from(string, (c, j) => (i === j ? c.toUpperCase() : c)).join("")
    );
  }
  return result;
}

function wave2(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}

function wave3(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}

/////////////
// Parse nice int from char problem
// {8 kyu}
/////////////
/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/
const getAge = (inputString) => parseInt(inputString);

/////////////
// Beginner Series #2 Clock
// {8 kyu}
/////////////
/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

EX:
  h = 0
  m = 1
  s = 1

  result = 61000

Input constraints:
  0 <= h <= 23
  0 <= m <= 59
  0 <= s <= 59
  */

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

function past2(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

/////////////
// Beginner Series #4 Cockroach
// {8 kyu}
/////////////
/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/
const cockroachSpeed = (s) => Math.floor((s * 1000 * 100) / (60 * 60));

const cockroachSpeed2 = (s) => Math.floor(s / 0.036);

function cockroachSpeed3(s) {
  return Math.floor((s * 100000) / 3600);
}

/////////////
// Mumbling
// {7 kyu}
/////////////
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accumME(s) {
  let result = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    result += `${s[i].repeat(i + 1)}-`;
  }
  result.split("-");
  console.log(result);
}

function accumFORLOOP(s) {
  let result = "",
    array = s.toLowerCase().split("");

  for (let i = 0; i < array.length(); i++) {
    result += array[i].toUpperCase();
    for (let j = i; j > 0; j--) {
      result += array[i];
    }
    if (i < array.length - 1) result += "-";
  }
  return result;
}

const accum = (s) =>
  s
    .toLowerCase()
    .split("")
    .map((el, i) => el.toUpperCase() + el.repeat(i))
    .join("-");

/////////////
// Build Tower
// {6 kyu}
/////////////
/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
function towerBuilder(nFloors) {
  let space,
    star,
    tower = [];

  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }

  return tower;
}

function towerBuilder2(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

function towerBuilder3(n) {
  return [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
  );
}

/////////////
// Reverse Strings
// {8 kyu}
/////////////
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
const solutionReverse = (str) => str.split("").reverse().join("");

const solutionReverse2 = (s) => [...s].reverse().join("");

/////////////
// Descending Order
// {7 kyu}
/////////////
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
const descendingOrder = (n) =>
  Number([...String(n)].sort((a, b) => b - a).join(""));

function descendingOrder2(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

function descendingOrder3(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}

/////////////
// Calculating with Functions
// {5 kyu}
/////////////
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
function executeValue(callback, value) {
  return typeof callback === "function" ? callback(value) : value;
}

function zero(callback) {
  const value = 0;
  return executeValue(callback, value);
}
function one(callback) {
  const value = 1;
  return executeValue(callback, value);
}
function two(callback) {
  const value = 2;
  return executeValue(callback, value);
}
function three(callback) {
  const value = 3;
  return executeValue(callback, value);
}
function four(callback) {
  const value = 4;
  return executeValue(callback, value);
}
function five(callback) {
  const value = 5;
  return executeValue(callback, value);
}
function six(callback) {
  const value = 6;
  return executeValue(callback, value);
}
function seven(callback) {
  const value = 7;
  return executeValue(callback, value);
}
function eight(callback) {
  const value = 8;
  return executeValue(callback, value);
}
function nine(callback) {
  const value = 9;
  return executeValue(callback, value);
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}
function minus(a) {
  return function (b) {
    return b - a; //doesnt work with a - b
  };
}
function times(a) {
  return function (b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function (b) {
    return Math.floor(b / a); //doesnt work as a / b
  };
}

function zero1(fn) {
  return fn ? fn(0) : 0;
}
function one1(fn) {
  return fn ? fn(1) : 1;
}
function two1(fn) {
  return fn ? fn(2) : 2;
}
function three1(fn) {
  return fn ? fn(3) : 3;
}
function four1(fn) {
  return fn ? fn(4) : 4;
}
function five1(fn) {
  return fn ? fn(5) : 5;
}
function six1(fn) {
  return fn ? fn(6) : 6;
}
function seven1(fn) {
  return fn ? fn(7) : 7;
}
function eight1(fn) {
  return fn ? fn(8) : 8;
}
function nine1(fn) {
  return fn ? fn(9) : 9;
}

function plus1(n) {
  return function (v) {
    return v + n;
  };
}
function minus1(n) {
  return function (v) {
    return v - n;
  };
}
function times1(n) {
  return function (v) {
    return v * n;
  };
}
function dividedBy1(n) {
  return function (v) {
    return v / n;
  };
}

const zero3 = (a) => (a ? a(0) : 0);
const one3 = (a) => (a ? a(1) : 1);
const two3 = (a) => (a ? a(2) : 2);
const three3 = (a) => (a ? a(3) : 3);
const four3 = (a) => (a ? a(4) : 4);
const five3 = (a) => (a ? a(5) : 5);
const six3 = (a) => (a ? a(6) : 6);
const seven3 = (a) => (a ? a(7) : 7);
const eight3 = (a) => (a ? a(8) : 8);
const nine3 = (a) => (a ? a(9) : 9);

const plus3 = (a) => (b) => a + b;
const minus3 = (a) => (b) => b - a;
const dividedBy3 = (a) => (b) => Math.floor(b / a);
const times3 = (a) => (b) => a * b;

const [zero4, one4, two4, three4, four4, five4, six4, seven4, eight4, nine4] = [
  ...Array(10),
].map((_, idx) => (fn) => fn ? fn(idx) : idx);
const [plus4, minus4, times4, dividedBy4] = [`+`, `-`, `*`, `/`].map(
  (val) => new Function(`b`, `return a => a ${val} b ^ 0`)
);

const n5 = (d) => (f) => f ? f(d) : d;
const zero5 = n(0);
const one5 = n(1);
const two5 = n(2);
const three5 = n(3);
const four5 = n(4);
const five5 = n(5);
const six5 = n(6);
const seven5 = n(7);
const eight5 = n(8);
const nine5 = n(9);

const plus5 = (f) => (n) => n + f;
const minus5 = (f) => (n) => n - f;
const times5 = (f) => (n) => n * f;
const dividedBy5 = (f) => (n) => Math.floor(n / f);

/////////////
// Exes and Ohs
// {7 kyu}
/////////////
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
  const ohs = (str.toLowerCase().match(/o/g) || []).length;
  const exs = (str.toLowerCase().match(/x/g) || []).length;

  return ohs === exs ? true : false;
}

function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/////////////
// Ones and Zeros
// {7 kyu}
/////////////
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/
const binaryArrayToNumberFOR4s = (arr) => {
  let bin;
  if (arr[0] === 1) bin += 8;
  if (arr[1] === 1) bin += 4;
  if (arr[2] === 1) bin += 2;
  if (arr[3] === 1) bin += 1;
  return bin;
};

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

const binaryArrayToNumber2 = (arr) => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
};

/////////////
// Highest Scoring Word
// {6 kyu}
/////////////
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high0(x) {
  const arr = x.split(" ");
  let result = arr[1];
  arr.forEach((word) => {
    parseInt(word, 36) > parseInt(result, 36)
      ? (result = word)
      : (result = result);
  });
  return result;
}

function high1(x) {
  const arr = x.split(" ");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = arr[0];

  const nums = arr.map((word) => {
    let value = 0;
    for (i = 0; i < word.length; i++) {
      value += alphabet.indexOf(i);
    }
  });

  nums.forEach((word) => {
    word > result ? (result = word) : (result = result);
  });
  return result;
}

//this is from substack
function highSUBMITTED(x) {
  const words = x.split(" ");
  const alphabetMap = {};
  for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }
  let highestScoringWord = { word: "", score: 0 };
  words.forEach((w) => {
    const chars = w.split("");
    const sumOfChars = chars.reduce(
      (count, char) => count + alphabetMap[char.charCodeAt()],
      0
    );
    if (sumOfChars > highestScoringWord.score) {
      highestScoringWord = { word: w, score: sumOfChars };
    }
  });

  return highestScoringWord.word;
}

function high2(x) {
  // let alphabets = [
  //   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  //   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  // ];
  let alphabets = "abcdefghijklmnopqrstuvwxyz"; //

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}

/////////////
// Find the unique number
// {6 kyu}
/////////////
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq2(arr) {
  let set = new Set(arr);
  let arr2 = [...set];

  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (arr[i] == arr2[2]) count++;
  }
  return count == 1 ? arr2[0] : arr2[1];
}

function findUniq3(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

/////////////
// List Filteri ng
// {7 kyu}
/////////////
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
const filter_list = (l) => l.filter((i) => typeof i == "number");

/////////////
// Unique In Order
// {6 kyu}
/////////////
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
const uniqueInOrder = (iterable) =>
  [...iterable].filter((el, i) => el != iterable[i + 1]);

var uniqueInOrder2 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

function uniqueInOrder3(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

/////////////
// Maximum subarray sum
// {5 kyu}
/////////////
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
var maxSequence = function (arr) {};

/////////////
// Sentence Smash
// {8 kyu}
/////////////
/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
function smash(words) {
  return `${words.join(" ")}`;
}

const smash2 = (words) => words.join(" ");

/////////////
// Extract the domain name from a URL
// {5 kyu}
/////////////
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/
function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");

  return url.split(".")[0];
}
function domainName2(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
function domainName3(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

/////////////
// Reverse words
// {7 kyu}
/////////////
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
const reverseWords = (str) =>
  str
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .join(" ");

function reverseWords2(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

/////////////
// Grasshopper - Terminal game move function
// {8 kyu}
/////////////
/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/
const move = (position, roll) => position + roll * 2;

/////////////
// Sort array by string length
// {7 kyu}
/////////////
/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  return [array.sort((a, b) => a.length - b.length)];
}
const sortByLength_ARROW = (array) => array.sort((a, b) => a.length - b.length);

/////////////
// Jaden Casing Strings
// {7 kyu}
/////////////
/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

/////////////
// Consecutive strings
// {6 kyu}
/////////////
/*
You are given an array(list) 'strarr' of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/
function longestConsec(strarr, k) {
  let arrLength = strarr.length;
  let arr = [];

  if (arrLength == 0 || k > arrLength || k <= 0) return "";

  for (let i = 0; i <= arrLength - k; i++) {
    let current = strarr[i];
    for (let ii = k, jj = 1; ii > 1; ii--, jj++) {
      current += strarr[i + jj];
    }
    arr.push(current);
  }
  return arr.reduce(function (a, b) {
    return a.length > b.length ? a : a.length == b.length ? a : b;
  });
}

/////////////
// Count characters in your string
// {6 kyu}
/////////////
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
const count = (string) => {
  let a = string.split("");
  let obj = {};
  a.forEach(function (s) {
    obj[s] = (obj[s] || 0) + 1;
  });
  return obj;
};

function count2(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

/////////////
// Array.diff
// {6 kyu}
/////////////
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  // Temporary array, containing all values from a, which are not contained in b
  let diffArray = [];
  // Looping over a
  for (let i = 0; i < a.length; i++) {
    // Per default we say that b does not contain a
    let bContainsAValue = false;
    // Loop over b
    for (let y = 0; y < b.length; y++) {
      // If any value in b is the same as the current value from a, we set bContainsAValue to true
      if (a[i] === b[y]) bContainsAValue = true;
    }
    // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
    if (!bContainsAValue) diffArray.push(a[i]);
  }
  // In the end we return the temporary array
  return diffArray;
}

function arrayDiff2(a, b) {
  let unique = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      unique.push(a[i]);
    }
  }
}

function array_diff3(a, b) {
  return a.filter((e) => !b.includes(e));
}

/////////////
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// {6 kyu}
/////////////
/*
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135
=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
a
a, 
b
b that defines the range 
[
a
,
b
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
a
,
b
]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!
*/
const isEurekaNumber = (num) => {
  const sum = String(num)
    .split("")
    .reduce((acc, digit, index) => {
      return acc + Math.pow(Number(digit), index + 1);
    }, 0);

  return sum === num;
};

const sumDigPow = (a, b) => {
  const eurekaNumbers = [];

  for (let i = a; i <= b; i++) {
    if (isEurekaNumber(i)) eurekaNumbers.push(i);
  }

  return eurekaNumbers;
};

function sumDigPow2(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

/////////////
// Reverse List Order
// {8 kyu}
/////////////
/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/
reverseList = (list) => list.reverse();

/////////////
// Binary Addition
// {7 kyu}
/////////////
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
const addBinary = (a, b) => (a + b).toString(2);

/////////////
// Sum of Numbers
// {7 kyu}
/////////////
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
  return n ** 3;
}

let rowSumOddNumbers2 = (n) => n ** 3;

/////////////
// Sort and Star
// {8 kyu}
/////////////
/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
twoSort = (s) => s.sort()[0].split("").join("***");

/////////////
// Friend or Foe?
// {7 kyu}
/////////////
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}
Input strings will only contain letters. Note: keep the original order of the names in the output.
*/
// function friend(friends) {
//   let output = [];
//   friends.forEach((f) => {
//     f.length() == 4 ? output.push(f) : null;
//   });
//   return output;
// }

function friend(friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

function friendFilter(friends) {
  return friends.filter((n) => n.length === 4);
}

/////////////
// Grasshopper - Debug sayHello
// {7 kyu}
/////////////
/*
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/
const sayHello = (name) => `Hello, ${name}`;

/////////////
// Find the next perfect square!
// {7 kyu}
/////////////
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/
let findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;

/////////////
// Student's Final Grade
// {8 kyu}
/////////////
/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*/
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

const finalGradeImproved = (exam, projects) => {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
};

/////////////
// Name Shuffler
// {8 kyu}
/////////////
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
nameShuffler = (str) => str.split(" ").reverse().join(" ");
console.log(nameShuffler("john McClane"));

/////////////
// You only need one - Beginner
// {8 kyu}
/////////////
/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
function check(a, x) {
  return a.indexOf(x) > -1;
}
const check2 = (a, x) => a.includes(x);

/////////////
// Twice as old
// {8 kyu}
/////////////
/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

function twiceAsOld2(a, b) {
  return a > 2 * b ? a - 2 * b : 2 * b - a;
}

/////////////
// Find the capitals
// {7 kyu}
/////////////
/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
const capitals = function (word) {
  let output = [];
  let w = word.split("");

  for (let i = 0; i < word.length; i++) {
    if (w[i] == w[i].toUpperCase()) {
      output.push(i);
    }
  }

  return output;
};

const capitals2 = function (word) {
  let a = word.split("");
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
};

const capitals3 = function (word) {
  return word
    .split("")
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};

const capitals4 = function (word) {
  return word.split("").reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

/////////////
// Convert a Number to a String!
// {7 kyu}
/////////////
/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/
function numberToString(num) {
  return "" + num;
}

const numberToString2 = (num) => `${num}`;

/////////////
// Playing with digits
// {5 kyu}
/////////////
/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

(a^p+b^p+1+c^p+2+d^p+3+...)=n∗k

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/
function digPow(n, p) {
  let digits = n.toString().split("").map(Number);
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }

  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}

function digPow2(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

/////////////
// get character from ASCII Value
// {8 kyu}
/////////////
/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
*/
const getChar = (c) => {
  String.fromCharCode(c);
};

const getChar2 = String.fromCharCode;
