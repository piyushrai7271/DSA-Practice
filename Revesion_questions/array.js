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

// Find the missing number in an array.
// Example:
// Input:
// [1,2,3,5,6]

// Output:
// 4

// function findMissingElement(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return null;

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] > 1) {
//       return arr[i] + 1;
//     }
//   }

//   return null;
// }

// console.log(findMissingElement([1,2,3,5,6,7,8,9,10]));

// TWO POINTER PATTERN .............

// Reverse an array in-place
// Input:[1,2,3,4,5]
// Output:[5,4,3,2,1]
// Conditions:

// ❌ Do not create new array

// ✔ Use two pointers

// let arr = [1,2,3,4,5];

// function reverseArray (arr){
//     if(!Array.isArray(arr) || arr.length === 0) return null;

//     for(let i=0,j=arr.length-1; i<j; i++,j--){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//     }
//     return arr;
// }

// console.log("Reversed array is :",reverseArray(arr));

// Move all zeros to the end of the array
// Input: [0,1,0,3,12]

// Output:[1,3,12,0,0]

// Conditions:
// Maintain relative order of non-zero elements
// Do it in-place
// Use two pointers

// let arr = [0, 1, 0, 3, 12];
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

// function moveZerosAtLast(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return null;

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

// console.log("Updated array :",moveZerosAtLast([0, 1, 0, 3, 12]));

// Now we move to a classic two pointer interview problem.
// Check if a string is a palindrome
// Input:"racecar"
// Output:true

// let str = "racecar";
// function isPalindrome(str){
//   if (typeof str !== "string") return false;

//   for(let i=0, j=str.length-1; i<j; i++, j--){
//     if(str[i] !== str[j]){
//       return false;
//     }
//   }

//   return true;
// }

// console.log("Is this string is palindrom :",isPalindrom(str));

// New Day.............

// 🧠 Question: Two Sum (Sorted Array)
// You are given:
// A sorted array (in increasing order)
// A target number
// Task:
// Find two numbers such that:
// arr[i] + arr[j] = target
// Return their indices.
// 📌 Example 1
// Input:
// arr = [1,2,3,4,6]
// target = 6

// Valid pairs:

// 2 + 4 = 6

// Indices:

// [1,3]

// let arr = [1,2,3,4,6];
// function twoSum(arr, target){
//    if(!Array.isArray(arr)) return null;

//    let i = 0;
//    let j = arr.length - 1;

//    while(i < j){
//       let sum = arr[i] + arr[j];

//       if(sum < target){
//         i++;
//       } else if(sum > target){
//         j--;
//       } else {
//         return [i, j];
//       }
//    }

//    return null;
// }

// console.log(twoSum(arr,6));

// Remove duplicates from sorted array (in-place)

// Example:
// Input: [1,1,2,2,3,4,4]
// Output:
// k = 4
// arr = [1,2,3,4,_,_,_]
// Conditions:
// Do it in-place
// Return count of unique elements (k)
// Maintain order
// Use two pointers

// function removeDuplicates(arr){
//   if (!Array.isArray(arr) || arr.length === 0) return 0;

//   let slow = 0;

//   for (let fast = 1; fast < arr.length; fast++) {

//     if (arr[fast] !== arr[slow]) {
//       slow++;
//       arr[slow] = arr[fast];
//     }

//   }

//   return slow + 1;
// }

// let arr = [1,1,2,2,3,4,4];
// let k = removeDuplicates(arr);

// console.log("k:", k);
// console.log("Updated array:", arr);

// Remove all occurrences of a given value in-place
// Example:
// Input: arr = [3,2,2,3]
// val = 3
// Output:
// k = 2
// arr = [2,2,_,_]

// function removeElement(arr, val){
//   if (!Array.isArray(arr)) return 0;

//   let k = 0;

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] !== val) {
//       arr[k] = arr[i];
//       k++;
//     }

//   }

//   return k;
// }

// let arr = [3,2,2,3];
// let k = removeElement(arr, 3);

// console.log("k:", k);
// console.log("Updated array:", arr);

// Given an array of integers, find the first repeating element.
// Return the element (not index).
// If no repeating element exists, return -1.

// 🔍 Example:
// Input: [5, 3, 4, 3, 5, 6]
// Output: 3

// let arr = [5,3,4,3,5,6];

// function firstRepeatingElement (arr){

//     if(!Array.isArray(arr)) return -1;

//     for(let i=0; i<arr.length; i++){
//         let value = arr[i];
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] === value){
//                 return value;
//             }
//         }
//     }
//     return -1;
// }

// function firstRepeatingElement(arr) {
//     if (!Array.isArray(arr)) return -1;

//     let minIndex = arr.length;
//     let result = -1;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 if (j < minIndex) {
//                     minIndex = j;
//                     result = arr[i];
//                 }
//                 break; // no need to check further
//             }
//         }
//     }

//     return result;
// }

// console.log("First repeting element Index :",firstRepeatingElement(arr));

// Given a sorted array, remove duplicates such that each element appears only once,
// and return the new length.

// 🔍 Example:
// Input: [1,1,2,2,3,4,4]
// Output: 4

// Modified array: [1,2,3,4,...]

// let arr = [1,1,2,2,3,4,4];

// let slow = 0;

// for(let fast = 1; fast <arr.length ; fast++){
//     if(arr[fast] !== arr[slow]){
//         slow++;
//         arr[slow] = arr[fast];
//     }
// }
// console.log(arr.slice(0,slow+1));

// function removeDuplicates(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return 0;

//     let slow = 0;

//     for (let fast = 1; fast < arr.length; fast++) {
//         if (arr[fast] !== arr[slow]) {
//             slow++;
//             arr[slow] = arr[fast];
//         }
//     }

//     return slow + 1;
// }

// console.log(removeDuplicates([1,1,2,2,3,4,4]));

// Given an array of integers, find the majority element.
// The majority element is the element that appears more than n/2 times.
// If no such element exists, return -1.

// 🔍 Example:
// Input: [2,2,1,1,2,2,2]
// Output: 2

// let arr = [1,2,3,4,5];

// function majorityElement(arr) {
//     if (!Array.isArray(arr)) return -1;

//     let maxOccurance = 0;
//     let maxElement = -1;

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         let value = arr[i];

//         for (let j = 0; j < arr.length; j++) {
//             if (value === arr[j]) {
//                 count++;
//             }
//         }

//         if (count > maxOccurance) {
//             maxOccurance = count;
//             maxElement = value;
//         }
//     }

//     // ✅ Important check
//     if (maxOccurance > Math.floor(arr.length / 2)) {
//         return maxElement;
//     }

//     return -1;
// }

// console.log(majorityElement(arr));

// 🧠 Two Pointer – Interview Question

// Given a sorted array, find if there exists a pair of elements whose difference is equal to a given target.

// 🔍 Example:
// Input: arr = [1, 3, 5, 8, 12], target = 7
// Output: true   // (8 - 1 = 7)
// Input: arr = [1, 2, 3, 4], target = 10
// Output: false

// let arr = [1, 3, 5, 8, 12];
// let target = 7;

// function isPairExists(arr, target) {
//     if (!Array.isArray(arr) || target < 0) return false;

//     let i = 0;
//     let j = 1;

//     while (j < arr.length) {
//         let diff = arr[j] - arr[i];

//         if (diff === target) {
//             return true;
//         } else if (diff < target) {
//             j++;
//         } else {
//             i++;
//         }

//         // ensure i < j
//         if (i === j) {
//             j++;
//         }
//     }

//     return false;
// }

// console.log(isPairExists(arr,target));


// 🧠 Two Pointer – Interview Question (Next)

// Given a sorted array, remove duplicates such that each element appears at most twice,
// and return the new length.

// 🔍 Example:
// Input: [1,1,1,2,2,3]
// Output: 5

// Modified array: [1,1,2,2,3,...]

// function removeDuplicates(arr) {
//     if (!Array.isArray(arr)) return 0;
//     if (arr.length <= 2) return arr.length;

//     let slow = 2;

//     for (let fast = 2; fast < arr.length; fast++) {
//         if (arr[fast] !== arr[slow - 2]) {
//             arr[slow] = arr[fast];
//             slow++;
//         }
//     }

//     return slow;
// }

// console.log(removeDuplicates([1,1,1,2,2,3]))

// 🧠 Two Pointer – Easy (Foundation Builder)

// Given a sorted array, find a pair whose sum is equal to target
// Return their indices [i, j] or false if not found.

// 🔍 Example:
// Input: arr = [1,2,4,6,10], target = 8  
// Output: [1,3]   // (2 + 6 = 8)

// function findPair (arr,target) {
//     if(!Array.isArray(arr)) return false;

//     let i = 0;
//     let j = arr.length-1;
//     while(i<j){
//         if(arr[i] + arr[j] > target){
//             j--;
//         } else if( arr[i] + arr[j] < target){
//             i++;
//         }else {
//             return [i,j];
//         }
//     }
//     return false;
// }

// console.log(findPair([1,2,4,6,10],8));


// 🧩 Question

// Given a sorted array, find all pairs whose sum = target

// Example:
// Input: [1,2,3,4,5,6], target = 7  
// Output: [[1,6],[2,5],[3,4]]

// let arr = [1,2,3,4,5,6], target = 7;
// let resultArray = [];

// let i = 0;
// let j = arr.length-1;
// while(i<j){
//     let sum = arr[i] + arr[j];
//     if(sum < target){
//          i++;
//     } else if (sum > target){
//         j--;
//     } else{
//       resultArray.push([arr[i],arr[j]]);
//       i++,j--;
//     }
// }
// console.log(resultArray);


// 🧠 Correction
// ✅ Correct Problem (No confusion)

// Given an array (not necessarily sorted), remove all occurrences of target in-place and return new length.

// 🔍 Correct Examples
// Input: [1,2,3,4,5,6], target = 4  
// Output: 5  
// Array: [1,2,3,5,6,...]
// Input: [2,2,3,4,2,5], target = 2  
// Output: 3  
// Array: [3,4,5,...]

// let arr = [2,2,3,4,2,5], target = 2;
// let slow = 0

// for(let i=0; i<arr.length; i++){
//    if(arr[i] !== target){
//       arr[slow] = arr[i];
//       slow++
//    }
// }

// console.log(slow);


// 🚀 Next (Final Two Pointer – Foundation Complete)
// 🧩 Question

// Given a sorted array, check if it is a palindrome.

// Example:
// [1,2,3,2,1] → true  
// [1,2,3,4] → false

// let arr = [1,2,3,2,1]

// function isPalindrom (arr){
//     if(!Array.isArray(arr)) return false;

//     for(let i=0, j=arr.length-1; i<j; i++,j--){
//         if(arr[i] !== arr[j]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPalindrom(arr));














