// 🧠 Sliding Window Question 1 (Level 0)

// Given an array and a number k,
// find the minimum sum of any subarray of size k.

// 🔍 Example
// Input: arr = [2,1,5,1,3,2], k = 3
// Output: 6
// 🔍 Explanation

// Subarrays:

// [2,1,5] → 8
// [1,5,1] → 7
// [5,1,3] → 9
// [1,3,2] → 6  ✔️ minimum

// // lets solve it normally without using sliding window with brute force
// function findMinimumSum (arr,k){
//     if(!Array.isArray(arr) || k < 1) return null;

//     let minimumSum = Infinity;
//     for(let i=0; i<arr.length; i++){
//         let currentSum = 0
//         for(let j=i; j<i+k; j++){
//             currentSum += arr[j]; 
//         }
//         if(currentSum < minimumSum){
//             minimumSum = currentSum;
//         }
//     }
//     return minimumSum;
// }

// console.log(findMinimumSum([2,1,5,1,3,2],3));

// // using sliding window
// function findMinimumSum (arr,k){
//     if(!Array.isArray(arr) || k < 1) return null;

//     let windowSum = 0;
//     for(let i=0; i<k; i++){
//        windowSum += arr[i];
//     }

//     let minimumSum = windowSum;

//     for(let j = k; j<arr.length; j++){
//         windowSum = windowSum - arr[j-k] + arr[j];
//         if(windowSum < minimumSum){
//             minimumSum = windowSum;
//         }
//     }
//     return minimumSum;
// }

// 🧠 Sliding Window Question 2 (Level 0)

// Given an array of 0 and 1,
// find the maximum number of 1s in any subarray of size k.

// 🔍 Example
// Input: arr = [1,0,1,1,0,1,0,1], k = 3
// Output: 3
// 🔍 Explanation
// [1,1,1] → 3 ✔️
// ⚠️ Rules
// Use sliding window
// Subarray must be continuous
// Size always = k

// function maximumOnes(arr, k) {
//     if (!Array.isArray(arr) || typeof k !== "number") return null;

//     let currentOne = 0;

//     // first window
//     for (let i = 0; i < k; i++) {
//         if (arr[i] === 1) {
//             currentOne++;
//         }
//     }

//     let windowOne = currentOne;

//     // sliding window
//     for (let i = k; i < arr.length; i++) {

//         // remove outgoing
//         if (arr[i - k] === 1) {
//             currentOne--;
//         }

//         // add incoming
//         if (arr[i] === 1) {
//             currentOne++;
//         }

//         if (currentOne > windowOne) {
//             windowOne = currentOne;
//         }
//     }

//     return windowOne;
// }

// console.log(maximumOnes([1,0,1,1,0,1,0,1],3))


// 🧠 Next Question (very important)
// Given an array and number k,
// find the maximum number of EVEN numbers in any subarray of size k.

// 🔍 Example
// Input: arr = [2,1,4,6,3,8,1], k = 3
// Output: 2

// function maximumOnes(arr, k) {
//     if (!Array.isArray(arr) || typeof k !== "number") return null;

//     let currentOne = 0;

//     // first window
//     for (let i = 0; i < k; i++) {
//         if (arr[i] === 1) {
//             currentOne++;
//         }
//     }

//     let windowOne = currentOne;

//     // sliding window
//     for (let i = k; i < arr.length; i++) {

//         // remove outgoing
//         if (arr[i - k] === 1) {
//             currentOne--;
//         }

//         // add incoming
//         if (arr[i] === 1) {
//             currentOne++;
//         }

//         if (currentOne > windowOne) {
//             windowOne = currentOne;
//         }
//     }

//     return windowOne;
// }

// 🧠 Next Question (very important)

// Given an array and number k,
// find the maximum number of EVEN numbers in any subarray of size k.

// 🔍 Example
// Input: arr = [2,1,4,6,3,8,1], k = 3
// Output: 2

// function maxEvenNumber (arr,k){
//     if(!Array.isArray(arr) || typeof k !== "number") return null;

//     let currentEven = 0;
//     for(let i=0; i<k; i++){
//        if(arr[i] % 2 === 0){
//         currentEven++;
//        }
//     }

//     let windowEven = currentEven;
//     for(let i=k; i<arr.length; i++){
//        if(arr[i-k] % 2 === 0){
//           currentEven--;
//        }

//        if(arr[i] % 2 === 0){
//         currentEven++;
//        }

//        if(currentEven > windowEven){
//         windowEven = currentEven;
//        }
//     }
//     return windowEven;
// }

// console.log(maxEvenNumber([2,1,4,6,3,8,1],3));

// 🧠 Next Fixed-Size Sliding Window Question

// Given an array and a number k,
// find the minimum number of odd numbers in any subarray of size k.

// 🔍 Example
// Input: arr = [1,2,3,4,5,6], k = 3
// Output: 1

// function minOddNumber (arr,k){
//     if(!Array.isArray(arr) || typeof k !== "number") return null;

//     let currentOdd = 0;
//     for(let i=0; i<k; i++){
//         if(arr[i] % 2 !== 0){
//             currentOdd++;
//         }
//     }

//     let windowMinOdd = currentOdd;
//     for(let i= k ; i<arr.length; i++){

//         if(arr[i-k] % 2 !== 0){
//             currentOdd--;
//         }

//         if(arr[i] % 2 !== 0){
//             currentOdd++;
//         }

//         if(currentOdd < windowMinOdd){
//             windowMinOdd = currentOdd;
//         }
//     }
//     return windowMinOdd;
// }

// console.log(minOddNumber([1,2,3,4,5,6],3))


// 🧠 Slightly Different Fixed-Size Question

// Given an array and a number k,
// find the maximum count of numbers greater than 5
// in any subarray of size k.

// 🔍 Example
// Input: arr = [2,6,7,1,8,3,9,4], k = 3
// Output: 2

// function maxGreater_K (arr,k , l){
//     if(!Array.isArray(arr) || typeof k !== "number" || typeof l !== "number") return null;

//     let currentGreater = 0;
//     for(let i = 0; i< k ; i++){
//         if(arr[i] > l){
//             currentGreater++
//         }
//     }

//     let windowGreater = currentGreater;
//     for(let i=k ; i<arr.length; i++){
//         if(arr[i-k] > l){
//             currentGreater--;
//         }

//         if(arr[i] > l){
//             currentGreater++;
//         }

//         if(currentGreater > windowGreater){
//             windowGreater = currentGreater;
//         }
//     }
//     return windowGreater;
// }

// console.log(maxGreater_K([2,6,7,1,8,3,9,4],3,5));

// 🧠 Best Next Question For You

// Given an array and k,
// return an array containing the sum of every subarray of size k.

// 🔍 Example
// Input: arr = [1,2,3,4,5], k = 3
// Output: [6,9,12]

// function sum_of_sunArray (arr,k){
//     if(!Array.isArray(arr) || typeof k !== "number") return null;

//     let sumOfSubArray = [];
//     let currentSum = 0
//     for(let i=0; i<k; i++){
//         currentSum += arr[i];
//     }

//     sumOfSubArray.push(currentSum);

//     let windowSum = currentSum;
//     for(let i=k; i<arr.length; i++){
//         windowSum = windowSum - arr[i-k] + arr[i];
//         sumOfSubArray.push(windowSum);
//     }

//     return sumOfSubArray;
// }

// console.log(sum_of_sunArray([1,2,3,4,5],3));


// 🧠 Next Fixed-Size Sliding Window Question

// Given an array and number k,
// return an array containing the count of EVEN numbers
// in every subarray of size k.

// 🔍 Example
// Input: arr = [1,2,4,3,6], k = 3
// Output: [2,2,2]

// function countEven (arr,k){
//   if(!Array.isArray(arr) || typeof k !== "number") return null;

//   let storeEvenCount = [];
//   let currentCount = 0;
//   for(let i=0; i<k; i++){
//     if(arr[i] % 2 === 0){
//         currentCount++;
//     }
//   }
//   storeEvenCount.push(currentCount);

//   for(let i=k; i<arr.length; i++){
//      if(arr[i-k] % 2 === 0){
//         currentCount--;
//      }

//      if(arr[i] % 2 === 0){
//         currentCount++;
//      }

//      storeEvenCount.push(currentCount);
//   }
//   return storeEvenCount;
// }

// console.log(countEven([1,2,4,3,6],3))

