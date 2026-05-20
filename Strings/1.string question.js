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

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let myObject = {};

    // store frequency of str1
    for (let i = 0; i < str1.length; i++) {

        let char = str1[i];

        if (myObject[char]) {
            myObject[char]++;
        } else {
            myObject[char] = 1;
        }
    }

    // reduce frequency using str2
    for (let i = 0; i < str2.length; i++) {

        let char = str2[i];

        if (!myObject[char]) {
            return false;
        }

        myObject[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));