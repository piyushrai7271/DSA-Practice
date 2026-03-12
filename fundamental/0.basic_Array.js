// find sum
// function sum(...args) {
// function sum (...args){
//     let sum = 0;
//     for(let i=0; i<args.length; i++){
//         sum = sum + args[i];
//     }
//     return sum;
// }

// //For the purpose of user debugging.
// console.log(sum(100, 200, 300, 400));

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// let numbers = "dfa12321afd";

// function secondLargest(s){
//     let firstL = -1;
//     let secondL = -1;

//     for(let i = 0; i < s.length; i++){
//         if(!isNaN(s[i])){
//             let digit = Number(s[i]);

//             if(digit > firstL){
//                 secondL = firstL;
//                 firstL = digit;
//             }
//             else if(digit < firstL && digit > secondL){
//                 secondL = digit;
//             }
//         }
//     }

//     return secondL;
// }

// console.log(secondLargest(numbers)); // 2

//Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// let number = 121;

// function isPalindrom(number) {

//   // handle negative numbers
//   if (number < 0) return false;

//   let fixedNumber = number;
//   let lastDigit = 0;
//   let reverse = 0;

//   while (number > 0) {
//     lastDigit = number % 10;
//     reverse = reverse * 10 + lastDigit;
//     number = Math.floor(number / 10);
//   }

//   return reverse === fixedNumber;
// }

// console.log(isPalindrom(number));



// let number = 121;

// let lastNumber = number%10;
// let remeningNumber = Math.floor(number/10);
// console.log("last number :",lastNumber);
// console.log("Remening Number :",remeningNumber);


// let number = -12345

// function reverse (number){
//     if(number < 0) return 0;
//     let lastDigit = 0
//     let reverseNumber = 0
//     while(number > 0){
//        lastDigit = number%10;
//        reverseNumber = reverseNumber*10 + lastDigit;
//        number = Math.floor(number/10);
//     }
//     return reverseNumber;
// }

// console.log("Reverse Number is :",reverse(number));

// find largest number....
// function findLargest(arr) {
//   // your solution here

//   // check the input is array
//   if (!Array.isArray(arr)) {
//     return false;
//   }

//   // check array is null
//   if (arr.length === 0) {
//     return null;
//   }

//   let largestNumber = -Infinity;
//   for (let i = 0; i < arr.length; i++){
//     let number = arr[i];

//     if (typeof number !== "number" || !Number.isFinite(number)) {
//       return false;
//     }

//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   }

// }

// new day ...

// remove duplicate element .......
// function removeDuplicates(arr){

//     if(!Array.isArray(arr)) return false;

//     if(arr.length === 0) return 0;

//     let slow = 0;

//     for(let fast = 1; fast < arr.length; fast++){

//         if(arr[fast] !== arr[slow]){
//             slow++;
//             arr[slow] = arr[fast];
//         }
//     }

//     return slow + 1;
// }

