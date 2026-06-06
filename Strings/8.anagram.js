// Anagram Challenge
// Valid Anagram Ignore Case and Spaces
// Return true if two strings are anagrams after:
// Ignoring spaces
// Ignoring uppercase/lowercase differences
// Example
// "Listen"
// "Silent"

// Output:
// true

// function isAnagram(str1, str2) {
//   if (typeof str1 !== "string" || typeof str2 !== "string") {
//     return false;
//   }

//   let str1S = str1.toLowerCase();
//   let str2S = str2.toLowerCase();
//   let myObject = {};

//   for (let i = 0; i < str1S.length; i++) {
//     let value = str1S[i];
//     if (value === " ") continue;

//     if (myObject[value]) {
//       myObject[value]++;
//     } else {
//       myObject[value] = 1;
//     }
//   }

//   for (let i = 0; i < str2S.length; i++) {
//     let value = str2S[i];
//     if (value === " ") continue;

//     if (myObject[value]) {
//       myObject[value]--;
//     } else {
//       return false;
//     }
//   }

//   for (const key in myObject) {
//     if (myObject[key] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isAnagram("Dormitory", "Dirty Room"));
