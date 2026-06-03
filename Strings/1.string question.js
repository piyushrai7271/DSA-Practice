// ✅ Question 1

// Count how many vowels are present in a string.

// 🔍 Example
// Input: "javascript"
// Output: 3

// function vowelCount(str) {
//   let countVowel = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       countVowel++;
//     }
//   }
//   return countVowel;
// }

// console.log(vowelCount("javascript"))

// ✅ Next Better Question

// Remove all vowels from a string.

// 🔍 Example
// Input: "javascript"
// Output: "jvscrpt"

// function removeVowel(str) {
//   let removedString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "a" &&
//       str[i] !== "e" &&
//       str[i] !== "i" &&
//       str[i] !== "o" &&
//       str[i] !== "u"
//     ) {
//       removedString += str[i];
//     }
//   }

//   return removedString;
// }

// console.log(removeVowel("javascript"));

// 🧠 Next String Manipulation Question

// Replace every space in a string with -

// 🔍 Example
// Input: "i love javascript"
// Output: "i-love-javascript"

// function removeSpace (str) {

//     let updatedStr = "";
//     for(let i=0; i<str.length; i++){
//         if(str[i] === " "){
//             updatedStr += _
//         } else {
//             updatedStr += str[i];
//         }
//     }
//     return updatedStr;
// }

// console.log(removeSpace("i-love-javascript"))

// 🧠 Better String Manipulation Question

// Compress the string using character counts.

// 🔍 Example
// Input: "aaabbccccd"
// Output: "a3b2c4d1"

// function compressString(str) {
//   let compressed = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compressed += str[i];
//       compressed += count;

//       count = 1;
//     }
//   }

//   return compressed;
// }

// console.log(compressString("aaabbccccd"));

// function compressString (str){

//     let myObject = {};
//     for(let i=0; i<str.length; i++){
//         let value = str[i];

//         if(myObject[value]){
//             myObject[value]++;
//         } else {
//             myObject[value] = 1;
//         }
//     }

//     let compressString = "";

//     for (let  key in myObject) {
//         compressString += key;
//         compressString += myObject[key];
//     }

//     return compressString;
// }

// console.log(compressString("aaabbccccd"));

// 🧠 Next String Manipulation Question
// Remove consecutive duplicate characters from a string.
// 🔍 Example
// Input: "aaabbccccd"
// Output: "abcd"
// 🔍 Example 2
// Input: "aabbccaa"
// Output: "abca"

// function removeDuplicate (str){

//     let uniqueString = "";
//     uniqueString += str[0];
//     for(let i = 0; i<str.length-1 ; i++){
//        if(str[i] !== str[i+1]){
//         uniqueString += str[i+1];
//        }
//     }
//     return uniqueString;
// }

// console.log(removeDuplicate("aaabbccccd"))

// 🧠 Next Good Manipulation Question

// Expand the compressed string.

// 🔍 Example
// Input: "a3b2c4"
// Output: "aaabbcccc"

// function expandString (str) {

//     let expaddedStr = "";
//     for(let i=0; i<str.length; i++){
//         if(typeof str[i] === "string"){
//             let currentString = str[i];

//         for(let j=0; j<str[i+1]; j++){
//             expaddedStr += currentString;
//         }
//         }
//     }
//     return expaddedStr;
// }

// console.log(expandString("a3b2c4"))

// 🧠 Next String Manipulation Question

// Check whether two strings are anagrams or not.

// 🔍 Example 1
// Input:
// "listen"
// "silent"

// Output:
// true

// function isAnagram(str1, str2) {

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let myObject = {};

//     // store frequency of str1
//     for (let i = 0; i < str1.length; i++) {

//         let char = str1[i];

//         if (myObject[char]) {
//             myObject[char]++;
//         } else {
//             myObject[char] = 1;
//         }
//     }

//     // reduce frequency using str2
//     for (let i = 0; i < str2.length; i++) {

//         let char = str2[i];

//         if (!myObject[char]) {
//             return false;
//         }

//         myObject[char]--;
//     }

//     return true;
// }

// console.log(isAnagram("listen", "silent"));

// 🧠 String Question 1 — Longest Word in Sentence
// Given a sentence,
// return the longest word.
// 🔍 Example
// Input:
// "i love javascript very much"

// Output:
// "javascript"
// ⚠️ Rules
// words are separated by spaces
// if multiple longest words exist, return first one
// don’t use built-in sort

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// // Example usage:
// console.log(findLongestWord("i love javascript very much"));

// Anargram
// palindrome
// reverse string
// string compression
// remove duplicates
// anagram
// frequency counting
// longest word
// substring problems
// basic sliding window on strings

// STRING REVISION.........................
// Anagram

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let myObject = {};
//   for (let i = 0; i < str1.length; i++) {
//     let value = str1[i];
//     if (myObject[value]) {
//       myObject[value]++;
//     } else {
//       myObject[value] = 1;
//     }
//   }

//   for (let j = 0; j < str2.length; j++) {
//     let value = str2[j];

//     if (!myObject[value]) {
//       return false;
//     } else {
//       myObject[value]--;
//     }
//   }
//   return true;
// }

// console.log(isAnagram("listen", "silent"));

// palindrom question

// function isPalindrom (str) {
//     if(str.length === 0) return false;

//     str = str.toLowerCase();
//     let isPalinTrue = true;
//     for(let i=0,j=str.length-1; i<j; i++,j--){
//        if(str[i] !== str[j]){
//         isPalinTrue= false;
//         break;
//        }
//     }
//     return isPalinTrue;
// }
// console.log(isPalindrom("Kayak"))

// reverse string
// 🧠 Next Question
// Reverse every word in a sentence
// but keep word order same.
// 🔍 Example
// Input:
// "i love javascript"

// Output:
// "i evol tpircsavaj"

// function reverseWords(sentence) {

//     if(sentence.length === 0) return null;

//     let words = sentence.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {

//         let reversed = "";

//         for (let j = words[i].length - 1; j >= 0; j--) {
//             reversed += words[i][j];
//         }

//         result.push(reversed);
//     }

//     return result.join(" ");
// }

// console.log(reverseWords("hello world"));

// NEW DAY..................................................
// Reverse the string and return reversed string

// function reverse(str) {
//   if (str.length === 0) return 0;

//   let reversed = "";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }

// console.log(reverse("piyush"));

// second method of reverse.............
// function reverse (str) {
//     if(str.length === 0) return null;

//     let reversed = "";
//     for(let i = str.length-1; i>=0 ; i--){
//        reversed = reversed + str[i];
//     }
//     return reversed;
// }

// console.log(reverse("Piyush"));

// NEW DAY........................................................
// reverse string
// 🧠 Next Question
// Reverse every word in a sentence
// but keep word order same.
// 🔍 Example
// Input:
// "i love javascript"

// Output:
// "i evol tpircsavaj"

// function reverseWords(sentence) {

//     let reversedSentence = "";
//     let word = "";

//     for (let i = 0; i <= sentence.length; i++) {

//         if (sentence[i] !== " " && i !== sentence.length) {

//             word = sentence[i] + word;

//         } else {

//             reversedSentence += word;

//             if (i !== sentence.length) {
//                 reversedSentence += " ";
//             }

//             word = "";
//         }
//     }

//     return reversedSentence;
// }

// console.log(reverseWords("i love javascript"));


// NEW DAY .................................................

// Reverse the order of words in a sentence.
// 🔍 Example
// Input:
// "i love javascript"
// Output:
// "javascript love i"
// ⚠️ Important

// function reverseWord (sentance) {
//    if(sentance.length === 0) return null;

//    let reversedSentance = "";
//    let word = sentance.split("");
//    for(let i=0 ; i<word.length; i++){
//     reversedSentance = reversedSentance + word[i];
//    }

//    return reversedSentance;
// }

// console.log(reverseWord("i love javascript"));


// Find the first non-repeating character in a string.
// 🔍 Example 1
// Input:
// "aabbcdeff"
// Output:
// "c"

// function nonRepeating (str) {
//     if(str.length === 0) return null;

//     let myObject = {}
//     for(let i=0; i<str.length; i++){
//         let char =  str[i];
//         if(myObject[char]){
//             myObject[char]++;
//         } else {
//             myObject[char] = 1;
//         }
//     }
//     let firstUnique = null;
//     for(let i=0; i< str.length; i++){
//         let value = str[i];
//         if(myObject[value] === 1){
//            firstUnique = value;
//            break;
//         }
//     }
//     return firstUnique;
// }

// console.log(nonRepeating("aabbcdeff"))


// Find the longest word in a sentence.
// 🔍 Example
// Input:
// "i love javascript very much"

// Output:
// "javascript"

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("i love javascript very much"));


// 🧠 Question 1

// Toggle the case of every character.

// Example
// Input:
// "HeLLo"

// Output:
// "hEllO"
// Example
// Input:
// "JavaScript"

// Output:
// "jAVAsCRIPT"

// function changeCase (str) {
//     if(str.length === 0) return null;

//     let resultStr = "";
//     for(let i=0; i<str.length; i++){
//         let code = str.charCodeAt(i);
//         if(code >=97 && code <= 122){
//             code = code - 32;
//             let char = String.fromCharCode(code);
//             resultStr += char
//         } else if( code >= 65 && code <= 90){
//              code = code + 32;
//              let char = String.fromCharCode(code);
//              resultStr += char;
//         }
//     }
//     return resultStr;
// }

// console.log(changeCase("HeLLo"))

// 🧠 Next Question
// Remove all digits from a string.

// Example
// Input:
// "abc123de45"

// Output:
// "abcde"

// function removeDigit (str) {
//     if(str.length === 0) return null;

//     let resultStr = "";
//     for(let i=0; i<str.length; i++){
//         let code = str.charCodeAt(i);
//         if(!(code >= 48 && code <= 57)){
//             resultStr += str[i];
//         }
//     }
//     return resultStr;
// }

// console.log(removeDigit("abc123de45"))


// 🧠 Next Question
// Compress consecutive spaces into a single space.
// Example
// Input:
// "i   love     javascript"

// Output:
// "i love javascript"

// function removeExtraSpace (sentance) {
//    if(sentance.length === 0) return null;

//    let resultStr = "";
//    for(let i=0; i<sentance.length; i++){

//     // Skip space if previous character is also a space
//         if (sentance[i] === " " && sentance[i - 1] === " ") {
//             continue;
//         }

//         resultStr += sentance[i];
//    }

//    return resultStr;
// }

// console.log(removeExtraSpace("i   love     javascript"))

