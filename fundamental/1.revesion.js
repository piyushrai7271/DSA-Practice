// Revesion of array
// let arr = [2,4,6,8,10,12,14,16,18];

// for(let i=arr.length-1; i>=0; i--){
//     console.log(`Index ${i} : ${arr[i]} element`);
// }

// for(let i=0; i<arr.length; i++){
//   if(arr[i] % 2  === 0 && arr[i] % 3 === 0){
//     console.log(arr[i]);
//   }
// }

// Given an array and a target number, return the index of the target.
// If the element does not exist, return -1.
// Input:
// arr = [4, 2, 7, 1, 9]
// target = 7

// Output:
// 2

// function findIndex (arr,target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target) return i;
//     }
//     return -1;
// }

// let returndValue = findIndex([1,2,3,4,5,6,8,10],9);
// console.log(returndValue);

// count how many time a target number appear

// function countOccurrences(arr, target){
//    let count = 0;
//    if(!Array.isArray(arr)) return null;

//    for(let i=0; i<arr.length ; i++){
//     if(arr[i] === target){
//         count++
//     }
//    }
//    return count;
// }

// console.log("Target occurrences :",countOccurrences([1,2,3,4,2,4,5,6,2],2));

// Problem
// Find the most frequent element in the array.
// Example 1:
// Input:
// [1,2,2,3,3,3,4]
// Output:
// 3

// let arr = [1,2,2,3,3,3,4];
// let myObj = {};

// for(let i = 0; i < arr.length; i++){
//   let value = arr[i];

//   if(myObj[value]){
//     myObj[value]++;
//   } else {
//     myObj[value] = 1;
//   }
// }

// let maxCount = 0;
// let mostFrequent = null;

// for(const key in myObj){
//   if(myObj[key] > maxCount){
//     maxCount = myObj[key];
//     mostFrequent = key;
//   }
// }

// console.log("Most frequent element:", mostFrequent);

// Given an array, move all 0s to the end of the array in-place while keeping the order of non-zero elements the same.

// Input:
// [0,1,0,3,12]

// Output:
// [1,3,12,0,0]

// let arr = [0, 1, 1, 0, 2, 0, 0, 4, 5, 6];
// let nonZeroIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     let temp = arr[nonZeroIndex];
//     arr[nonZeroIndex] = arr[i];
//     arr[i] = temp;

//     nonZeroIndex++;
//   }
// }
// console.log(arr);

// function moveZeros(arr) {
//   if(!Array.isArray(arr)) return null;

//   let nonZeroIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       let temp = arr[nonZeroIndex];
//       arr[nonZeroIndex] = arr[i];
//       arr[i] = temp;

//       nonZeroIndex++;
//     }
//   }
//   return arr;
// }

// console.log(moveZeros(arr));


