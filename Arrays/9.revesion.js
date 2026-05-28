// 🧠 Linear Search Question

// Find the second largest element in an array.

// 🔍 Example
// Input:
// [4, 9, 2, 7, 9, 5]

// Output:
// 7

// function secondLargest (arr){
//     if(!Array.isArray(arr) || arr.length === 0) return null;

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > firstLargest){
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if(arr[i] < firstLargest && arr[i] > secondLargest){
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }
// console.log(secondLargest([4, 9, 2, 7, 9, 5]));



// 🧠 Next Two Pointer Question

// Check if a sorted array contains a pair whose sum equals target.

// 🔍 Example
// Input:
// arr = [1,2,3,4,6]
// target = 6

// Output:
// true

// function findTargetSum (arr, target){
//     if(!Array.isArray(arr) || arr.length === 0 ||  target < 0) return null;

//     let isTargetachive = false;
//     let i=0;
//     let j= arr.length-1;
//     while(i<j){
//         if(arr[i] + arr[j] > target){
//             j--;
//         } else if( arr[i] + arr[j] < target){
//             i++;
//         } else if (arr[i] + arr[j] === target){
//             isTargetachive = true;
//             break;
//         }
//     }
//     return isTargetachive;
// }

// console.log(findTargetSum([1,2,3,4,6],6));

// 🧠 Sliding Window Question (Fixed Size)
// Find the maximum sum of any subarray of size k.
// 🔍 Example
// Input:
// arr = [2,1,5,1,3,2]
// k = 3
// Output:
// 9

// function findMaxSum (arr, k){
//     if(!Array.isArray(arr) || k < 1 || k > arr.length) return 0;

//     let windowSum = 0;
//     for(let i=0; i<k; i++){
//         windowSum += arr[i];
//     }

//     let maxSum = windowSum;
//     for(let i=k; i<arr.length; i++){
//         windowSum = windowSum - arr[i-k] + arr[i];

//         if(windowSum > maxSum){
//             maxSum = windowSum;
//         }
//     }
//     return maxSum;
// }
// console.log(findMaxSum([2,1,5,1,3,2],3))


// NEW DAY.........................

// Move all zeros to the end of array
// while keeping non-zero elements order same.
// 🔍 Example
// Input:
// [0,1,0,3,12]
// Output:
// [1,3,12,0,0]
// ⚠️ Rules
// use two pointers
// do in-place if possible
// maintain order of non-zero elements

// function moveZeroAtEnd (arr) {
//     if(!Array.isArray(arr) || arr.length === 0) return null;

//     let nonZeroIndex = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             let temp = arr[nonZeroIndex];
//             arr[nonZeroIndex] = arr[i];
//             arr[i] = temp;

//             nonZeroIndex++;
//         }
//     }
//     return arr;
// }

// console.log(moveZeroAtEnd([0,1,0,3,12]))

// Remove duplicates from a sorted array.
// 🔍 Example
// Input:
// [1,1,2,2,3,4,4]

// Output:
// [1,2,3,4]
// ⚠️ Rules
// array is sorted
// use two pointers
// modify same array if possible
// maintain sorted order

// function removeDuplicates (arr) {
//     if(!Array.isArray(arr) || arr.length === 0) return null;

//     let slow = 0;
//     for(let fast=0; fast<arr.length; fast++){
//        if(arr[slow] !== arr[fast]){
//         slow++;
//         arr[slow] = arr[fast];
//        }
//     }
//     return arr.slice(0,slow+1);
// }

// console.log(removeDuplicates([1,1,2,2,3,4,4]));


// 🧠 Fixed Sliding Window Question

// Find the maximum number of even numbers
// in any subarray of size k.

// 🔍 Example
// Input:
// arr = [2,1,4,6,3,8,1]
// k = 3

// Output:
// 2

// function findMaxEven(arr,k){
//     if(!Array.isArray(arr) || arr.length === 0 || k < 1) return null;

//     let maxWindowEven = 0;
//     for(let i=0; i<k; i++){
//         if(arr[i] % 2 === 0){
//             maxWindowEven++
//         }
//     }

//     let currentMaxEven = maxWindowEven;
//     for(let i=k; i<arr.length; i++){
//         if(arr[i-k] % 2 === 0){
//             maxWindowEven--;
//         } 
//         if(arr[i] % 2 === 0){
//             maxWindowEven++;
//         }

//         if(maxWindowEven > currentMaxEven){
//             currentMaxEven = maxWindowEven;
//         }
//     }
//     return currentMaxEven;
// }

// console.log(findMaxEven([2,1,4,6,3,8,1],3))


// Find all subarray sums of size k.
// 🔍 Example
// Input:
// arr = [1,2,3,4,5]
// k = 3
// Output:
// [6,9,12]

// function findSubarraySum (arr,k) {
//     if(!Array.isArray(arr) || arr.length === 0 || k < 1) return null;

//     let sumWindow = [];
//     let windowSum = 0;
//     for(let i=0; i<k; i++){
//         windowSum += arr[i]
//     }
//     sumWindow.push(windowSum);

//     for(let j=k; j<arr.length; j++){
//         windowSum = windowSum - arr[j-k] + arr[j];
//         sumWindow.push(windowSum);
//     }
//     return sumWindow;
// }


// console.log(findSubarraySum([1,2,3,4,5],3));