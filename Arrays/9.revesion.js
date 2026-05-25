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


