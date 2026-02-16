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
//     for(let i=0,j=x.length-1; i<j; i++,j--){
//         if(x[i] !== x[j]){
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPalindrome(x));
