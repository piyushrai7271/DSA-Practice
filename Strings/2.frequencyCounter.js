// Given a string, return an object containing the frequency of each character.

// Example
// Input:
// "aabcc"
// Output:
// {
//   a: 2,
//   b: 1,
//   c: 2
// }

// function countFrequency (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let myObject = {};
//     for(let i=0; i<str.length; i++){
//         let value = str[i];

//         if(myObject[value]){
//             myObject[value]++;
//         }else {
//             myObject[value] = 1;
//         }
//     }
//     return myObject;
// }

// console.log(countFrequency("aabcc"));



// Find the Character With Maximum Frequency
// Return the character that appears the most times.

// Example 1
// Input:
// "aabccccc"
// Output:
// "c"

// function mostFrequency (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let myObject = {};
//     for(let i=0; i<str.length; i++){
//         let value = str[i];

//         if(myObject[value]){
//             myObject[value]++;
//         }else {
//             myObject[value] = 1;
//         }
//     }
    
//     let currentMaxValue = 0;
//     let mostChar = "";
//     for (const key in myObject) {
//         if(myObject[key] > currentMaxValue){
//             currentMaxValue = myObject[key];
//             mostChar = key;
//         }
//     }
//     return mostChar;
// }

// console.log(mostFrequency("aabccccc"))