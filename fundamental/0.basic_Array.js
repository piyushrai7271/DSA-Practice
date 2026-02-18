// find sum 
// function sum(...args) {
//     // Your implementation
//     let sum = 0;
//     for (let i = 0; i < args.length; i++){
//         sum = sum + args[i];
//     }
//     return sum;
// }

// //For the purpose of user debugging.
// sum(100, 200, 300, 400);

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// let s = "dfa12321afd"
// var secondHighest = function(s) {
//     let firstHighest = -1;
//     let second = -1;

//     for (let i = 0; i < s.length; i++) {
//         if (!isNaN(s[i])) {
//             let num = Number(s[i]);

//             if (num > firstHighest) {
//                 second = firstHighest;
//                 firstHighest = num;
//             } 
//             else if (num < firstHighest && num > second) {
//                 second = num;
//             }
//         }
//     }

//     return second;
// };
// secondHighest()

// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// let x = 123;
// var isPalindrome = function(x) {
    
// };

// let num = 123
// let first = num%10; // giving last number 
// let firstDivid = Math.floor(num/10);  // giving remaning number
// console.log(first);
// console.log(firstDivid);
// let second = firstDivid%10;
// let secondDivid = Math.floor(firstDivid/10);
// console.log(second);
// console.log(secondDivid);

// let num = 12345;

// function printRevers (num) {

//     while(num > 0){
//         console.log(num%10);
//         num = Math.floor(num/10);
//     }
// }

// printRevers(num);


// let num = 12345;

// function printRevers (num) {
//     let count = 0;
//     while(num > 0){
//         // console.log(num%10);
//         count++;
//         num = Math.floor(num/10);
//     }
//     return count;
// }

// console.log("Count of  number :",printRevers(num));

// let num = 12345;

// function printRevers (num) {
//     let sum = 0;
//     while(num > 0){
//         let lastNum = num%10;
//         sum = sum + lastNum;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }

// console.log("Sum of  number :",printRevers(num));

// let num = -12345;

// function reverseNumber(num) {
//     let sign = num < 0 ? -1 : 1;
//     num = Math.abs(num);

//     let reNumber = 0;

//     while (num > 0) {
//         let lastNum = num % 10;
//         reNumber = reNumber * 10 + lastNum;
//         num = Math.floor(num / 10);
//     }

//     return reNumber * sign;
// }

// console.log("Reverse of number:", reverseNumber(num));

// check the number is palindrom 

// function isPalindrome(num) {
//     let original = num;
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     return original === reversed;
// }

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false






