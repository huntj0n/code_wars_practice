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
