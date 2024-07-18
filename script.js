// // let twopointers = 2;
// // let threepointers = 3;
// // let points = twopointers * 2 + threepointers * 3;
// // console.log(points);

// //write a function that prints out all the leap years in the 20th century

// /*First method*/

// // function leapYears() {
// //   for (let year = 1900; year <= 1999; year++) {
// //     if (year % 4 === 0) {
// //       console.log(year);
// //     }
// //   }
// // }
// // leapYears();

// /*Another method*/

// const years = [...Array(100).keys()].map((n) => n + 1900); // Creating an array of years from 1900 to 1999.
// // Defining a function to find and print leap years.
// function leapYears(years) {
//   // Looping through each year in the array.
//   for (let i = 0; i < years.length; i++) {
//     if (years[i] % 4 === 0) {
//       // Checking if the year is divisible by 4 (a leap year).
//       console.log(years[i] + " is a Leap year");
//     }
//   }
// }
// leapYears(years);

// /*Given the age of a person who was born on February 29th, write a function that returns how many times the person
// has celebrated their birthday on the date that they were born.*/

// // let age = 38;
// // let currentYear = 2024;
// // let birthYear = 1986;

// // function birthdayNumber() {
// //   let times = 0; // initializig the counter
// //   for (birthYear; birthYear < currentYear; birthYear++) {
// //     if (birthYear % 4 === 0) {
// //       times++;
// //     }
// //   }
// //   console.log(`${times} times`);

// //   return times;
// // }
// // birthdayNumber();

// // let hours = 6;
// // function howManySeconds(hours) {
// //   let seconds = hours * 3600;
// //   return seconds;
// // }
// // console.log(howManySeconds(hours));

// function printMyName(name) {
//   console.log(name);
// }
// printMyName("kiprop, James, quincy, Wanjiku, Wendy, Sasha, Val");

// Example
// function reusableFunction() {
//   console.log("Heyya, World");
// }

// reusableFunction();

function myName(name) {
  console.log(name);
}
myName("James, trent");
