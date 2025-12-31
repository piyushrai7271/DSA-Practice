// question on linear search
// // Search an element in an array and return its index (or -1)

// let arr = [1,4,23,6,7,89,100,121,212,30,40,50,10];
// let element = 10;

// const searchElement = function (arr){
   
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === element){
//             return i;
//         }
//     }
//     return -1;
// }
// let returnedValue = searchElement(arr);
// console.log(returnedValue);

// Count how many times every  number appears in an array.

// let arr = [1,2,3,4,5,6,1,2,3,4,5,10,2,3];

// const elementfrequency = function (arr) {
   
//     let myObject = {};

//     for(let i=0; i<arr.length; i++){
//         let value = arr[i];
//         if(myObject[value]){
//             myObject[value]++;
//         }else{
//             myObject[value] = 1;
//         }
//     }

//     return myObject;
// }
// let elemFreq = elementfrequency(arr);
// console.log(elemFreq);

// // Count how many times a number appears.
// let arr = [1,2,3,4,5,6,1,2,3,4,5,10,2,3];
// let target = 2;

// ;((arr,target)=>{
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === target){
//             count++;
//         }
//     }
//     console.log(`${target} appears ${count} number of time`);
// })(arr,target);

// Find the first occurrence and last occurrence of a number.
// let arr = [1,2,3,4,5,6,7,1,2,3,1,2,3];
// let target = 3;
// let firstOccurance = null;
// let lastOccutance = null;
// let count =0;

// for(let i=0; i<arr.length ; i++){

//     if(arr[i] === target && count === 0){
//         firstOccurance = i;
//         lastOccutance = i;
//         count++;
//     }else if(arr[i] === target){
//         lastOccutance = i;
//     }

// }
// console.log(`first occurance is : ${firstOccurance} and lastOccurence is : ${lastOccutance}`)

// Find the first occurrence and last occurrence of a number.
//  let arr = [1,2,3,4,5,6,7,1,2,3,1,2,3];
//  let target = 3;
// let firstOccurance = null;
// let lastOccutance = null;

// const findFirst_lastOccurance = function (arr,target){
   
//     if(arr[i] === target && firstOccurance !== null){
//         firstOccurance = i;
//         lastOccutance = i;
//     }else if(arr[i] === target ){
//         lastOccutance = i
//     }
//     return [lastOccutance,firstOccurance];
// }
// findFirst_lastOccurance(arr,target);

// new day.....................
//Check if the array is sorted (ascending order)
// let arr = [1,2,3,4,5,6,7,8,9,10];

// const isSorted = function (arr) {
//     let lastElement = arr[0];
//     let isascending = true;
//     for(let i=0; i<arr.length; i++){
//          if(lastElement > arr[i]){
//             isascending = false;
//             break;
//          }
//          lastElement = arr[i];
//     }
//     return isascending;
// }
// console.log(isSorted(arr));

// Find the first repeating element in an array {Not solved my me}
// let arr = [1, 2, 3, 4, 2, 1, 3];

// let minSecondIndex = arr.length;
// let result = -1;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             if (j < minSecondIndex) {
//                 minSecondIndex = j;
//                 result = arr[i];
//             }
//             break; // stop after second occurrence
//         }
//     }
// }

// console.log(result);

// Find the longest consecutive increasing subarray (continuous) {not solved my me}
// Input:  [1, 2, 3, 2, 3, 4, 5, 1]

// let arr = [1, 2, 3, 2, 3, 4, 5, 1];

// let count = 1;
// let currentCount = 1;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] === 1) {
//         currentCount++;
//     } else {
//         if (currentCount > count) {
//             count = currentCount;
//         }
//         currentCount = 1;
//     }
// }

// // final check for last streak
// if (currentCount > count) {
//     count = currentCount;
// }

// console.log(count);

// New day...............
//Find the equilibrium index in an array {i was not able to solve it}

//An index is called an equilibrium index if
//sum of elements to the left = sum of elements to the right
//Return the first equilibrium index.
//If none exists, return -1.

// let arr = [4,5,1,1,1,1];

// const findEquilibrimIndex = function(arr) {
//     let preIndexSum = 0;
//     let afterIndexSum = 0;
//     let result = -1;

//     for(let i=0; i<arr.length; i++){
//         if(i>0){
//              preIndexSum += arr[i-1];
//         }
//         for(let j= i+1; j<arr.length; j++){
            
//             afterIndexSum += arr[j];
//         }
//         if(preIndexSum === afterIndexSum){
//             result = i;
//         }else{
//             afterIndexSum = 0;
//         }
//     }
//     return result;

// }
// let Index = findEquilibrimIndex(arr);
// console.log(Index);

// CORRECT SOLUTION
// const findEquilibrimIndex = function(arr) {
//     let preIndexSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let afterIndexSum = 0;

//         for (let j = i + 1; j < arr.length; j++) {
//             afterIndexSum += arr[j];
//         }

//         if (preIndexSum === afterIndexSum) {
//             return i; // first equilibrium index
//         }

//         preIndexSum += arr[i];
//     }
//     return -1;
// };

// Find the smallest subarray with sum ≥ target{not done by myself}
// let arr = [2, 3, 1, 2, 4, 3];
// let target = 7;

// function minSubArrayLength(arr, target) {
//     let minLength = arr.length + 1;

//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;

//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];

//             if (sum >= target) {
//                 let currentLength = j - i + 1;
//                 if (currentLength < minLength) {
//                     minLength = currentLength;
//                 }
//                 break; // no need to extend further
//             }
//         }
//     }

//     return minLength === arr.length + 1 ? 0 : minLength;
// }

// console.log(minSubArrayLength(arr, target));




