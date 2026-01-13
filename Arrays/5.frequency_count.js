// question on frequency

//Count frequency of each element in an array

// let arr = [2, 3, 2, 4, 3, 2, 5];
// let myObj={};

// for(let i=0;i<arr.length; i++){
//     let value = arr[i];
//     if(myObj[value]){
//         myObj[value]++
//     }else{
//         myObj[value]=1;
//     }
// }

// for (const key in myObj) {
//     console.log(`${key} appears ${myObj[key]} number of time`)
// }

// Count frequency of characters in a string
// let str = "sjfhsjkfhrritontr";
// let myObject ={};

// for(let i=0; i<str.length; i++){

//     let value = str[i];
//     if(myObject[value] !== undefined){
//         myObject[value]++;
//     }else{
//         myObject[value]=1
//     }
// }

// for (const key in myObject) {
//     console.log(`${key} appears ${myObject[key]} number of times`)
// }

// Find element with maximum frequency
// let arr = [2,3,4,5,2,3,7,5,5,5,2,5,0];
// let myObject ={};

// for(let i=0; i<arr.length; i++){
//     let value = arr[i];

//     if(myObject[value] !==undefined){
//         myObject[value]++
//     }else{
//         myObject[value]=1;
//     }
// }
// let maximumfreq = 0;
// let maxelem = null;
// for (const key in myObject) {
//     if(myObject[key]>maximumfreq){
//         maximumfreq = myObject[key];
//         maxelem = key;
//     }
// }
// console.log(maxelem);

//Count vowels frequency in a string
// let str = "abchenfanenfjfimdjfnfhimncbfajfnfnjdi";
// let myObject = {};

// for(let i=0; i<str.length; i++){
//     let value = str[i];
//     if(value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
//         if(myObject[value]){
//             myObject[value]++;
//         }else{
//             myObject[value]=1;
//         }
//     }
// }
// for (const key in myObject) {
//     console.log(`${key} appears ${myObject[key]} time`);
// }

// Check if two strings have same character frequency

// let arr = "abcdefgh";
// let brr = "abcdefgh";
// let myObject = {};

// if (arr.length !== brr.length) {
//     console.log("Not same frequency");
// } else {

//     // build frequency
//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         myObject[value] = (myObject[value] || 0) + 1;
//     }

//     // reduce frequency
//     for (let j = 0; j < brr.length; j++) {
//         let value = brr[j];

//         if (myObject[value] === undefined) {
//             console.log("Not same frequency");
//             return;
//         }
//         myObject[value]--;
//     }

//     console.log("Same character frequency");
// }

// Find first repeating element

// let arr = [1,2,3,4,2,5,6,3,7];
// let repeatingElement = null;

// outer:
// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j] === arr[i]){
//             repeatingElement = arr[i];
//             break outer;
//         }
//     }
// }
// console.log(repeatingElement);

// let arr = [1, 2, 3, 4, 2, 5, 6, 3, 7];

// function firstRepeting(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[j] === arr[j]) {
//         return arr[j];
//       }
//     }
//   }
// }
// console.log(firstRepeting(arr));

// order of (n*n)

//Find first repeating element
// let arr = [1, 2, 2, 1];
// let myObject = {};

// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     if (myObject[value]) {
//         console.log(value); // 2
//         break;
//     }
//     myObject[value] = true;
// }

// Find first non-repeating element

// let arr = [5,4,6,5,6,1,3,2];


// let firstUnique = function (arr){
//     let isUnique = true;
//     let firstUnique = null;
//     for(let i=0; i<arr.length; i++){

//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]=== arr[j]){
//                 isUnique = false;
//                 break;
//             }
//         }
//         if(isUnique){
//            firstUnique = arr[i];
//            return firstUnique;
//         }else{
//             isUnique = true
//         }
//     }
// }

// console.log(firstUnique(arr));

//  let arr = [5,4,6,5,6,1,3,2];

//  for(let i=0; i<arr.length; i++){

//     let value = arr[i];
//     let j=i+1;
//     while(j<arr.length){
//         if(arr[j]===value){
//             break;
//         }
//     }
//  }

// Find first non-repeating element
// Find first non-repeating element
// let arr = [5,4,6,5,6,1,3,2];

// for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;

//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//             isUnique = false;
//             break;
//         }
//     }

//     if (isUnique) {
//         console.log("First unique element is:", arr[i]);
//         break;
//     }
// }

//Check if two strings are anagrams
// let str1="aabbccdd";
// let str2="abcdabcd";

// function isAnagram (str1,str2){

//     let myObject={};
//     if(str1.length !== str2.length){
//         return false;
//     }else{
//         // frequency of first str1
//         for(let i=0; i<str1.length; i++){
//             let value = str1[i];
//             if(myObject[value] !==undefined){
//                 myObject[value]++;
//             }else{
//                 myObject[value]=1;
//             }
//         }

//         // frequency of second str2
//         for(let j=0; j<str2.length; j++){

//             let value = str2[j];
//             if(myObject[value]){
//                 myObject[value]--;
//             }else {
//                 return false
//             }
//         }
//     }

//     // final check
//     for (const key in myObject) {
//         if (myObject[key] !== 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isAnagram(str1,str2));

// same problem without object
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     for (let i = 0; i < str1.length; i++) {
//         let count1 = 0;
//         let count2 = 0;

//         // count str1[i] in str1
//         for (let j = 0; j < str1.length; j++) {
//             if (str1[j] === str1[i]) {
//                 count1++;
//             }
//         }

//         // count same character in str2
//         for (let k = 0; k < str2.length; k++) {
//             if (str2[k] === str1[i]) {
//                 count2++;
//             }
//         }

//         if (count1 !== count2) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isAnagram("aabbccdd", "abcdabcd"));

//Find all duplicates in an array

// let arr = [1, 2, 3, 4, 2, 3, 5];
// let arrOfDupliucate = [];
// let myObject = {};

// for(let i=0; i<arr.length; i++){
//     let value = arr[i];

//     if(myObject[value]){
//         myObject[value]++;
//     }else{
//         myObject[value]=1;
//     }
// }

// for (const key in myObject) {
//     if(myObject[key] > 1){
//         arrOfDupliucate.push(key);
//     }
// }
// console.log("All the duplicate elements are :",arrOfDupliucate);
// // oredre of n*n

// remove duplicate element from array using frequency and extra obj and array allowed 
// let arr = [1, 2, 3, 2, 4, 3, 5];

// const removeDuplicate = function (arr) {
//      let myObject = {};
//      let unique = [];

//      for(let i=0; i<arr.length; i++){
//         let value = arr[i];
//         if(myObject[value] !== undefined){
//             myObject[value]++;
//         }else{
//             myObject[value]=1;
//         }
//      }

//      for (const key in myObject) {
//         unique.push(Number(key));
//      }
//      return unique;
// }

// console.log(removeDuplicate(arr));

// same question and preserving the order

// let arr = [1, 2, 3, 2, 4, 3, 5];
// let unique = [];
// let myObject = {};

// for(let i=0; i<arr.length; i++){
//    let value = arr[i];
//    if(myObject[value]){
//        myObject[value]++
//    }else{
//      unique.push(value);
//      myObject[value] = 1;
//    }
// }
// console.log(unique)

//Find majority element (> n/2 times)
// let arr = [3, 3, 4, 3, 2, 3, 3];
// let myObject = {};
// let half = arr.length / 2;
// let found = false;

// // frequency count
// for(let i=0; i<arr.length; i++){
//    let value = arr[i];
//    if(myObject[value] !== undefined){
//      myObject[value]++;
//    }else{
//      myObject[value] = 1;
//    }
// }

// // check majority
// for (const key in myObject) {
//     if(myObject[key] > half){
//         console.log("Majority element is :", Number(key));
//         found = true;
//         break;
//     }
// }

// if(!found){
//     console.log("There is no majority element");
// }

// Count frequency of words in a sentence
let str = "i will complete data Structure and algo basic soon";
let myObject = {};

