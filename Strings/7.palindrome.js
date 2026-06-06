// First Palindrome Question
// Given a string, return true if it is a palindrome, otherwise false.

// Example
// Input:
// "madam"

// Output:
// true

// function isPalindrome (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let isPalimTrue = true;
//     for(let i=0, j=str.length-1; i<j; i++,j--){
//         if(str[i] !== str[j]){
//            isPalimTrue = false;
//            break;
//         }
//     }
//     return isPalimTrue;
// }

// console.log(isPalindrome("madam"))

// Question 1: Valid Palindrome (Ignore Case)
// Check whether a string is a palindrome, but ignore uppercase/lowercase differences.
// Example 1
// Input:
// "Madam"

// Output:
// true

// function validatePalindrom (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let str1 = str.toLowerCase();

//     let isPalindrom = true;
//     for(let i=0, j=str1.length-1; i<j; i++,j--){
//         if(str1[i] !== str1[j]){
//             isPalindrom = false;
//             break;
//         }
//     }
//     return isPalindrom;
// }

// console.log(validatePalindrom("Madam"));

// Palindrome Ignoring Spaces
// Check whether a string is a palindrome while ignoring spaces.
// Example 1
// Input:
// "nurses run"

// Output:
// true

// function validatePalindrom (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let isPalindrom = true;
//     let i=0;
//     let j=str.length-1;
//     while(i<j){
//         if(str[i] === " "){
//             i++;
//         } else if (str[j] === " "){
//             j--;
//         } else if(str[i] !== str[j]){
//             isPalindrom = false;
//             break;
//         } else {
//             i++,j--
//         }
//     }
//     return isPalindrom;
// }

// console.log(validatePalindrom("nurses run"))


// This is the most common palindrome variant.
// Valid Palindrome
// Ignore:
// spaces
// special characters
// case
// Example
// Input:
// "A man, a plan, a canal: Panama"


// function isPalindrome(s) {
//     let cleaned = "";

//     for (let i = 0; i < s.length; i++) {
//         let code = s.charCodeAt(i);
//         if (code >= 65 && code <= 90) {
//             cleaned += String.fromCharCode(code + 32);
//         } else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
//             cleaned += s[i];
//         }
//     }
    
//     let left = 0;
//     let right = cleaned.length - 1;
    
//     while (left < right) {
//         if (cleaned[left] !== cleaned[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
    
//     return true;
// }


// const input = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(input)); // Output: true
