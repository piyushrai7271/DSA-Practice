// Test Question 1
// Remove all special characters and keep only letters and digits.

// Example
// Input:
// "he@llo#123!"

// Output:
// "hello123"

// function removeSpecialChar(str) {
//   if (str.length === 0) return null;

//   let filteredStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (
//       (code >= 65 && code <= 90) ||
//       (code >= 97 && code <= 122) ||
//       (code >= 48 && code <= 57)
//     ) {
//       filteredStr += str[i];
//     }
//   }
//   return filteredStr;
// }

// console.log(removeSpecialChar("he@llo#123!"));

// Test Question 2
// Replace every space with %20.
// Example
// Input:
// "i love javascript"
// Output:
// "i%20love%20javascript"
// Tests:
// string rebuilding
// character replacement

// function fillSpace (sentance, subsentance){
//     if(sentance.length === 0 || subsentance.length === 0) return null;

//     let updatedSentance = "";
//     for(let i=0; i<sentance.length; i++){
        
//         if(sentance[i] === " " ){
//             updatedSentance += subsentance;
//         }else {
//             updatedSentance += sentance[i];
//         }
//     }
//     return updatedSentance;
// }

// console.log(fillSpace("i love javascript","%20"));


// Test Question 3
// Capitalize the first letter of every word.
// Example
// Input:
// "i love javascript"
// Output:
// "I Love Javascript"

// Tests:
// word boundaries
// previous-character thinking

// function capitalizedFirstLetter (sentance) {
//     if(sentance.length === 0 || typeof sentance !== "string") return null;

//     let resultSentance = "";
//     for(let i=0; i<sentance.length; i++){
//         if(i === 0 || sentance[i-1] === " "){
//             let code = sentance.charCodeAt(i);
//             if(code >= 97 && code <= 122){
//                  code = code - 32;
//                  let capitalLetter = String.fromCharCode(code);
//                  resultSentance += capitalLetter;
//             } else {
//                 resultSentance += sentance[i];
//             }
//         } else {
//             resultSentance += sentance[i];
//         }
        
//     }
//     return resultSentance;
// }

// console.log(capitalizedFirstLetter("I love javascript"))


// Test Question 4
// Count how many words are present in a sentence.
// Example
// Input:
// "i love javascript very much"
// Output:
// 5
// Constraint:
// Don't use split().
// Tests:
// word extraction logic
// space handling

// function countWords (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let wordCount = 0;
//     for(let i = 0; i<str.length; i++){
//         if(i=== 0 && str[i] !== " "){
//           wordCount++;
//         } else if(str[i-1] === " " &&  str[i] !== " "){
//             wordCount++;
//         }
//     }
//     return wordCount;
// }

// console.log(countWords("i love javascript"))



// Test Question 5
// Shift every alphabet by 1.

// Example
// Input:
// "abcXYZ"
// Output:
// "bcdYZA"

// Tests:
// charCodeAt
// String.fromCharCode
// character manipulation


// function shiftAlphabet(str) {
//     if (typeof str !== "string") return null;

//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let code = str.charCodeAt(i);

        
//         if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(((code - 97 + 1) % 26) + 97);
//         }
    
//         else if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(((code - 65 + 1) % 26) + 65);
//         }
    
//         else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(shiftAlphabet("abcXYZ")); // Output: "bcdYZA"
