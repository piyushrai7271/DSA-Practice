//  Array question ......
// let arr = [10,20,30,40,50,60,70,80,90,100];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// If the element does not exist, return -1.
// Input:
// arr = [4, 2, 7, 1, 9]
// target = 7
// Output:
// 2

// let arr = [4,2,7,1,9];
// let target = 7

// function findElement (arr,target){

//   if(!Array.isArray(arr)) return -1;

//   for(let i=0; i<arr.length; i++){
//     if(arr[i] === target){
//         return i;
//     }
//   }
//   return -1
// }

// console.log("Index of target value :",findElement(arr,target));

// Count how many times a number appears in the array.

// Input:
// arr = [1,2,3,2,4,2,5]
// target = 2

// Output:
// 3

// function countApperance (arr,target){
//     if(!Array.isArray(arr)) return null;

//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target){
//             count++;
//         }
//     }
//     return count;
// }

// console.log("Total apperance of the targeted number :",countApperance([1,2,3,4,5,6,2,4,5],2));

// // Find the most frequent element in the array.

// // Input:
// // [1,2,2,3,3,3,4]

// // Output:
// // 3

// let arr = [1,2,2,3,3,3,4];
// let myObj = {};

// for(let i=0; i<arr.length; i++){
//     let value = arr[i];
//     if(myObj[value]){
//         myObj[value]++;
//     }else {
//         myObj[value] = 1;
//     }
// }

// let result = 0

// for (const key in myObj) {
//     if(myObj[key] > result){
//         result = myObj[key]
//     }
// }

// Beter SOLUTION
// function mostFrequent(arr){

//   if(!Array.isArray(arr) || arr.length === 0) return null;

//   let freq = {};

//   for(let i = 0; i < arr.length; i++){
//     let value = arr[i];

//     if(freq[value]){
//       freq[value]++;
//     }else{
//       freq[value] = 1;
//     }
//   }

//   let maxCount = 0;
//   let result = null;

//   for(let key in freq){
//     if(freq[key] > maxCount){
//       maxCount = freq[key];
//       result = Number(key);
//     }
//   }

//   return result;
// }

// console.log(mostFrequent([1,2,2,3,3,3,4]));

// New Day........

// LINEAR SEARCH..................

// Given an array, return the first element that appears only once.
// Input:
// [4,5,1,2,0,4]

// Output:
// 5
// Do not use Map/Object
// Use loops (linear search style)

// let arr = [2, 3, 4, 2, 3, 5, 4];

// function firstNonRepeating(arr) {
//   if (!Array.isArray(arr)) return null;

//   for (let i = 0; i < arr.length; i++) {
//     let isEqual = false;   // reset for every element

//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         isEqual = true;
//         break;
//       }
//     }

//     if (!isEqual) {
//       return arr[i];
//     }
//   }

//   return null;
// }

// console.log(firstNonRepeating(arr));

// Find the first duplicate element in an array.

// Example:

// Input:
// [2,5,1,2,3,5,1]

// Output:
// 2

// let arr = [2,5,1,2,3,5,1];

// function findFirstDuplicate (arr){
//     if (!Array.isArray(arr)) return null;

//     for(let i=0; i<arr.length; i++){

//         for(let j= i+ 1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 return arr[i];
//             }
//         }
//     }
//     return null;
// }

// console.log("First Duplicate element :",findFirstDuplicate(arr));

// Find the second largest element in an array without sorting.
// Input:
// [10, 5, 8, 20, 15]
// Output:
// 15

// let arr = [10, 5, 8, 20, 15];
// let firstLargest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];

//   if (num > firstLargest) {
//     secondLargest = firstLargest;
//     firstLargest = num;
//   } else if (num < firstLargest && num > secondLargest) {
//     secondLargest = num;
//   }
// }

// console.log("Second largest number is :", secondLargest);

// let arr = [10, 5, 8, 20, 15];

// function findSecondLargestElem(arr) {
//   if (!Array.isArray(arr) || arr.length < 2) return null;

//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = num;
//     } else if (num > secondLargest && num < firstLargest) {
//       secondLargest = num;
//     }
//   }

//   return secondLargest === -Infinity ? null : secondLargest;
// }

// console.log("Second Largest Element :", findSecondLargestElem(arr));



// Find the element that appears more than n/2 times.

// Input:
// [2,2,1,1,2,2,2]

// Output:
// 2

// Explanation:
// array length = 7
// n/2 = 3.5

// 2 appears 4 times → majority element

// let arr = [2,2,1,1,2,2,2];
// let half = arr.length/2;

// for(let i=0; i<arr.length; i++){
//     let count = 0 
//     for(let j= i+1; j<arr.length; j++){
//        if(arr[j] === arr[i]){
//         count ++;
//        }
//     }
//     if(count > half){
//         console.log(arr[i]);
//     }
// }

// we can handle this using using object which will reduce time complexity


