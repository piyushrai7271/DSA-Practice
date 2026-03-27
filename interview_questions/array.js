// interview level array question.................

// 🔹 LINEAR SEARCH QUESTION.........................

// Given an array of integers nums and an integer target, return the index of the first occurrence of target.
// If target is not present, return -1.

// Example:
// Input: nums = [4, 2, 7, 1, 9], target = 7
// Output: 2

// Input: nums = [5, 3, 8], target = 10
// Output: -1

// function findElementIndex (arr,target){
//     if(!Array.isArray(arr)) return -1;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log("Index of targeted element :",findElementIndex([4,2,7,1,9],7));

// Question 2 (Linear Search Pattern)
// Given an array nums, return the count of occurrences of a target element.

// Example:
// Input: nums = [1, 2, 3, 2, 4, 2], target = 2
// Output: 3

// function countElement (arr, target) {

//    if(!Array.isArray(arr)) return 0;
//    let count = 0;

//    for(let i=0; i<arr.length; i++){
//       if(arr[i] === target){
//         count++;
//       }
//    }
//    return count;
// }

// console.log("Count occurance of targeted value :",countElement([1,2,3,2,4,2],2));

// Given an array nums, find the second largest element in the array.
// Return -1 if it doesn’t exist.

// Example:
// Input: [10, 5, 8, 20, 15]
// Output: 15

// Input: [5, 5, 5]
// Output: -1

// Input: [7]
// Output: -1

// function secondLargest (arr){
//     if(!Array.isArray(arr)) return -1;

//     let firstLargestNum = -Infinity;
//     let secondLargestNum = -Infinity;
//     for(let i=0; i<arr.length; i++){
//         let value = arr[i];
//         if(value > firstLargestNum){
//             secondLargestNum = firstLargestNum;
//             firstLargestNum = value;
//         } else if(value < firstLargestNum && value > secondLargestNum){
//             secondLargestNum = value;
//         }
//     }
//     return secondLargestNum === -Infinity ? -1 : secondLargestNum;
// }

// console.log("Second Largest number in Array :",secondLargest([10,5,8,20,15]));

//🔹 Next Pattern: Two Pointer.................................

// 🧠 Question 1 (Two Pointer – Classic)

// Given a sorted array nums and a target sum,
// return true if any two numbers add up to the target, otherwise return false.
// Example:
// Input: nums = [1, 2, 4, 6, 10], target = 8
// Output: true  // (2 + 6)

// Input: nums = [2, 4, 6], target = 15
// Output: false

// function findPairTargetSum (arr, target){
//     if(!Array.isArray(arr)) return false;

//     let i=0, j=arr.length-1;
//     while(i<j){
//         let sum = arr[i] + arr[j];
//         if(sum > target){
//             j--;
//         }else if(sum < target){
//             i++;
//         }else {
//             return [i,j]
//         }
//     }
//     return false;
// }

// console.log("Pair of elemntes are :",findPairTargetSum([1,2,4,6,10],8))

// 🧠 Question 2

// Given a sorted array, remove duplicates in-place such that each element appears only once.
// Return the new length.
// Example:
// Input: [1,1,2,2,3,4,4]
// Output: 4
// Modified array: [1,2,3,4, ...]

// function removeDuplicates (arr){
//     if(!Array.isArray(arr)) return 0;

//     let slow = 0;
//     for(let fast = 1; fast <arr.length; fast++){
//         if(arr[fast] !== arr[slow]){
//             slow++;
//             arr[slow] = arr[fast];
//         }
//     }
//     return slow + 1;
// }

// console.log("Unique element array is :",removeDuplicates([1,1,2,2,3,4,4]))

// previous question but here we are returning unique element:
// function removeDuplicates(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return [];

//     let slow = 0;

//     for (let fast = 1; fast < arr.length; fast++) {
//         if (arr[fast] !== arr[slow]) {
//             slow++;
//             arr[slow] = arr[fast];
//         }
//     }

//     return arr.slice(0, slow + 1);
// }

// 🧠 Question 3

// Given a sorted array, move all zeroes to the end while maintaining order of non-zero elements.
// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// ⚠️ Constraints
// ❌ Don’t use extra array
// ✅ In-place
// ✅ O(n)

// function moveZerosAtLast(arr) {
//   if (!Array.isArray(arr)) return -1;

//   let nonZeroIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       if (i !== nonZeroIndex) {
//         let temp = arr[nonZeroIndex];
//         arr[nonZeroIndex] = arr[i];
//         arr[i] = temp;
//       }
//       nonZeroIndex++;
//     }
//   }
//   return arr;
// }

// console.log(moveZerosAtLast([0, 1, 0, 3, 12]));

// OTHER METHOD TO SOLVE THIS QUESTION....
// function moveZeros(arr) {
//   let index = 0;

//   for (let num of arr) {
//     if (num !== 0) {
//       arr[index++] = num;
//     }
//   }

//   while (index < arr.length) {
//     arr[index++] = 0;
//   }

//   return arr;
// }

// NEW DAY..................................

// QUESTION:-
// Given a sorted array, remove duplicates such that each element can appear at most twice.
// Return the new length.
// Example:
// Input: [1,1,1,2,2,3]
// Output: 5

// Modified array: [1,1,2,2,3]
// Input: [0,0,1,1,1,1,2,3,3]
// Output: 7

// Modified array: [0,0,1,1,2,3,3]

// let arr = [0,0,1,1,1,1,2,3,3];

// function removeDuplicates(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return 0;

//     let slow = 0;

//     for (let fast = 0; fast < arr.length; fast++) {
//         if (slow < 2 || arr[fast] !== arr[slow - 2]) {
//             arr[slow] = arr[fast];
//             slow++;
//         }
//     }

//     return slow;
// }

// console.log("Length of arr :",removeDuplicates(arr));



// 🧠 Question

// Given a sorted array, remove all duplicates completely (keep only elements that appear once).
// Example:
// Input: [1,1,2,3,3,4]
// Output: [2,4]
// 🎯 Task
// In-place if possible (or explain why not)
// Return result

// let arr = [1,1,2,3,3,4];

// function removeAllDuplicates(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return [];

//     let slow = 0;
//     let fast = 0;

//     while (fast < arr.length) {
//         let start = fast;

//         // Move fast to end of current group
//         while (fast < arr.length && arr[fast] === arr[start]) {
//             fast++;
//         }

//         // Check group size
//         if (fast - start === 1) {
//             arr[slow] = arr[start];
//             slow++;
//         }
//     }

//     return arr.slice(0, slow);
// }


// console.log(removeAllDuplicates(arr));


// 🔹 Next Pattern: Sliding Window (🔥 Very Important)..............

// Find the maximum sum of subarray of size k

// Example:
// Input: arr = [2, 1, 5, 1, 3, 2], k = 3  
// Output: 9   // [5,1,3]


// function maxSumSubarray(arr, k) {
//     let windowSum = 0;

//     // Step 1: First window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i];
//     }

//     let maxSum = windowSum;

//     // Step 2: Slide window
//     for (let i = k; i < arr.length; i++) {
//         windowSum = windowSum - arr[i - k] + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }
