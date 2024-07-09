// let twopointers = 2;
// let threepointers = 3;
// let points = twopointers * 2 + threepointers * 3;
// console.log(points);

//write a function that prints out all the leap years in the 20th century

const years = [...Array(100).keys()].map((n) => n + 1900);
// console.log(years);
function leapYears(years) {
  for (let i = 0; i < years.length; i++) {
    if (years[i] % 4 === 0) {
      console.log(years[i] + " is a Leap year");
    }
  }
}
leapYears(years);

// function leapYears() {
//   for (let year = 1900; year <= 1999; year++) {
//     if (year % 4 === 0) {
//       console.log(year);
//     }
//   }
// }
// leapYears();
