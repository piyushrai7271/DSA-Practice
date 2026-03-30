// sliding window questions from  basic

// 🧩 Question 1

// Given an array of integers and a number k,
// find the maximum sum of any subarray of size k

// Example:
// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// let windowSum = 0;

// // first window
// for (let i = 0; i < k; i++) {
//   windowSum = windowSum + arr[i];
// }

// // console.log(windowSum)

// let maxSum = windowSum;

// for (let i = k; i < arr.length; i++) {
//     windowSum = windowSum - arr[i-k] + arr[i];
//     maxSum = Math.max(maxSum, windowSum)
// }

// console.log("Max sum is :",maxSum);


// 🧩 Question 2

// Given an array and k,
// find the minimum sum of subarray of size k

// Example:
// Input: [2, 1, 5, 1, 3, 2], k = 3  
// Output: 6   // [1,3,2]

// let arr = [2,1,5,1,3,2], k=3;

// function findMinimumSum (arr,k){
//     if (!Array.isArray(arr) || k <= 0 || k > arr.length) return null;

//     let windowSum = 0;
//     // first window
//     for(let i=0; i<k ; i++){
//         windowSum = windowSum + arr[i];
//     }

//     let minSum = windowSum;

//     for(let i= k; i<arr.length; i++){
//         windowSum = windowSum - arr[i-k] + arr[i];
//         minSum = Math.min(minSum, windowSum);
//     }

//     return minSum;
// }

// console.log("Min sub array sum is :",findMinimumSum(arr,k));


// 🧩 Question 3

// Given an array and k,
// find the average of all subarrays of size k

// Example:
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: [2.67, 2.33, 3.00, 2.00]

// let arr = [2,1,5,1,3,2], k=3;

// function findAvgSubArray(arr, k) {
//     if (!Array.isArray(arr) || k <= 0 || k > arr.length) return null;
    
//     let windowSum = 0;
//     let resultArray = [];

//     // first window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i];
//     }

//     resultArray.push(Number((windowSum / k).toFixed(2))); // ✅ FIX

//     // sliding window
//     for (let i = k; i < arr.length; i++) {
//         windowSum = windowSum - arr[i - k] + arr[i];
//         resultArray.push(Number((windowSum / k).toFixed(2)));
//     }
     
//     return resultArray;
// }

// console.log(findAvgSubArray(arr,k));


// 🧩 Question 4

// Given an array and k,
// find the maximum number in each subarray of size k

// Example:
// Input: [2,1,5,1,3,2], k = 3
// Output: [5,5,5,3]

let arr = [2,1,5,1,3,2], k = 3

function maxInSubarrays(arr, k) {
    if (!Array.isArray(arr) || k <= 0 || k > arr.length) return null;

    let result = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];

        for (let j = i; j < i + k; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }

        result.push(max);
    }

    return result;
}

console.log(maxInSubarrays(arr,k));

