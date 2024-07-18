/* If a number is autobiographical, then the number's digits describe itself. The first digit is the amount of times the 
digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the 
digit 2 appears, etc. This repeats for all digits of the number. The number 6210001000 is autobiographical, because it 
has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.
Create a function that takes an integer n and returns whether or not n is an autobiographical number.
Examples

// isAutobiographical(6210001000) ➞ true
// isAutobiographical(12345) ➞ false
// isAutobiographical(1210) ➞ true
// one 0, two 1's, one 2, zero 3's
// isAutobiographical(638) ➞ false
// isAutobiographical(0) ➞ false

claims no zeroes, however zero is the first digit
Notes
Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
n is always >= 0 and is always an integer.*/

//Converting the integer n to a string to easily access each digit.
//Checking if the length of the string is greater than 10; if so, return false.
//Initializing an array to count the occurrences of each digit (0-9).
//Looping through each digit of the string and update the count array accordingly.
//Looping through each digit of the string again, checking if the count matches the corresponding digit's value.
//If all checks pass, return true; otherwise, return false.

/*steps to be followed*/
//1.declare the function that takes the integer
//2.convert the integer into a string to access all the digits
//3.store the values of each digit that was converted into a string(variable)
//4.inside the function state the requirements of an autobiographical no.()
//5.initiallise an array to count the occurence of every digit (9)
//6.use a loop,(length of array)  -will compare  the string to the array created
//7. (boolean)-if it passes the test returns true ...if not it returns false
//8.call the function

function isAutobiographical(n) {
  //converting the integers into a string
  const str = n.toString();
  //Checking if the length of the string is greater than 10; if so, return false.
  if (str.length > 10) return false;
  //Counting the occurrences of each digit (0-9).
  const count = countOccurrences(str);

  //check if the number is autobiographical
  for (let i = 0; i < str.length; i++) {
    if ((count[i] || 0) !== parseInt(str[i])) {
      return false;
    }
  }
  return true;
}
const countOccurrences = (str) => {
  const counter = {};
  for (let i = 0; i < str.length; i++) {
    let digit = str[i];
    if (digit in counter) {
      counter[digit] += 1;
    } else {
      counter[digit] = 1;
    }
  }
  return counter;
};
const numbers = [1210, 2020, 3211000, 42101000];
numbers.forEach((num) => {
  console.log(`${num} is autobiographical: ${isAutobiographical(num)}`);
});
