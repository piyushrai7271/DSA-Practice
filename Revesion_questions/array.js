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