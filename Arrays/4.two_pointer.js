// two pointer question

//Reverse an array in place using two pointers.

// let arr=[1, 2, 3, 4, 5];

// for(let i=0,j=arr.length-1; i<j; i++,j--){
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i]=temp;
// }
// console.log(arr);

// check a string is pelindrom or not

// let str = "racecar"
// let isPelindrom = true;

// function checkPelindrom (str,isPelindrom) {
//    for(let i=0,j=str.length-1; i<j ; i++,j--){
//        if(str[i] !== str[j]){
//          isPelindrom=false;
//          break;
//        }
//    }
//    return isPelindrom;
// }
// console.log(checkPelindrom(str,isPelindrom));

// Given a sorted array, find two numbers such that their sum is equal to a given target.
//Return the indices of those two numbers.

// let arr = [1, 2, 3, 4, 6, 8, 9]
// let target = 10

// function findtargetedSumIndexes (arr,target){
//     for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j] === target){
//             return [i,j];
//         }
//     }
//  }
// }
// console.log(findtargetedSumIndexes(arr,target));
// // this apporach takes O(n*n)

// // vs

// function anotherLogic (arr,target){
//     let i=0;
//     let j= arr.length-1;
//     while(i<j){
//         if(arr[i]+arr[j] < target){
//             i++;
//         }else if(arr[i]+arr[j]>target){
//             j--;
//         }else{
//             return [i,j];
//         }
//     }
// }
// console.log(anotherLogic(arr,target));
// //time complexity order(n)

// Remove duplicates from a sorted array in place and return the new length.

// let arr = [1,1,2,2,3,4,4,5]
// let duplicateElement=[];

// let i=j-1;
// let j=1;
// while(j<arr.length-1){
//     if(arr[i] === arr[j]){
//          duplicateElement.push(arr[j]);
//          j++;
//     }
// }

// 🧠 Two Pointer – Revision Question 1

// Given a sorted array, check if there exists a pair whose sum is closest to a given target.
// Return the pair.

// 🔍 Example:
// Input: arr = [1,3,4,7,10], target = 15
// Output: [4,10]   // sum = 14 (closest to 15)

// function closestPair(arr, target) {
//     if (!Array.isArray(arr) || arr.length < 2) return [];

//     let i = 0;
//     let j = arr.length - 1;

//     let closestDiff = Infinity;
//     let result = [];

//     while (i < j) {
//         let sum = arr[i] + arr[j];
//         let diff = Math.abs(target - sum);

//         if (diff < closestDiff) {
//             closestDiff = diff;
//             result = [arr[i], arr[j]];
//         }

//         if (sum < target) {
//             i++;
//         } else {
//             j--;
//         }
//     }

//     return result;
// }

// // Example
// console.log(closestPair([1,3,4,7,10], 15));

// 🧠 Two Pointer – Revision Question 2

// Given a sorted array, remove all duplicates in-place and return the new length.

// 🔍 Example:
// Input: [1,1,2,2,3,4,4]
// Output: 4

// Modified array: [1,2,3,4,...]

// let arr = [1,1,2,2,3,4,4];
// let slow = 0;

// for(let fast = 1; fast<arr.length; fast++){
//     if(arr[fast] !== arr[slow]){
//         slow++;
//         arr[slow] = arr[fast];
//     }
// }
// console.log(arr.slice(0,slow+1));
// console.log(slow + 1);

// 🧠 Two Pointer – Next Level (Still Interview Friendly)

// Given a sorted array, remove duplicates such that each element can appear at most 2 times.
// Return the new length.

// 🔍 Example:
// Input: [1,1,1,2,2,3]
// Output: 5

// Modified array: [1,1,2,2,3,...]

// let arr = [1,1,1,2,2,3];

// function removeDuplicates (arr){
//     if(!Array.isArray(arr)) return null;

//     if(arr.length < 2) return null;

//     let slow = 2;
//     for(let fast = 2; fast < arr.length; fast++){
//         if(arr[fast] !== arr[slow-2]){
//             arr[slow] = arr[fast];
//             slow++;
//         }
//     }
//     return slow;
// }
// console.log(removeDuplicates(arr));

// 🧠 Two Pointer – Interview Level (Your Level)

// Given a sorted array, check if there exists a pair such that the difference between them is equal to a target.
// Return true or false.

// 🔍 Example:
// Input: arr = [1,3,5,8,12], target = 7
// Output: true   // (8 - 1 = 7)

// function diffSumTarget(arr, target) {
//     if (!Array.isArray(arr)) return false;

//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         let diff = arr[j] - arr[i];

//         if (diff === target) {
//             return true;
//         } else if (diff > target) {
//             j--;
//         } else {
//             i++;
//         }
//     }

//     return false;
// }

// console.log(diffSumTarget([1,3,5,8,12], 7));

// 🧠 Two Pointer Question

// Given a sorted array, count how many unique pairs have sum less than a target.

// 🔍 Example:
// Input: arr = [1,2,3,4,5], target = 7
// Output: 6

// brute force...
// let arr = [1,2,3,4,5], target = 7;
// let uniqueCount = 0;

// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] < target){
//             uniqueCount++;
//         }
//     }
// }

// console.log(uniqueCount);

// let arr = [1,2,3,4,5], target = 7;
// let uniqueCount = 0;

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//     if (arr[i] + arr[j] < target) {
//         uniqueCount += (j - i); // ✅ fix
//         i++;
//     } else {
//         j--;
//     }
// }

// console.log(uniqueCount);

// 🧠 Two Pointer Question

// Given a sorted array, remove all occurrences of a given target in-place and return the new length.

// 🔍 Example:
// Input: arr = [1,2,3,2,4,2,5], target = 2
// Output: 4

// Modified array: [1,3,4,5,...]

// function removeElement(nums, target) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== target) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// }

// let arr = [1,2,3,2,4,2,5], target=2;

// console.log(removeElement(arr,target))

// 🧠 Two Pointer Question

// Given a sorted array, find the pair whose sum is closest to a target.
// Return that pair.

// 🔍 Example:
// Input: arr = [1,3,4,7,10], target = 15
// Output: [4,10]   // sum = 14 (closest)

// let arr = [1,3,4,7,10], target = 15;

// function diffSumTarget(arr, target) {
//     if (!Array.isArray(arr)) return false;

//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         let diff = arr[j] - arr[i];

//         if (diff === target) {
//             return true;
//         } else if (diff > target) {
//             j--;
//         } else {
//             i++;
//         }
//     }

//     return false;
// }

// console.log(diffSumTarget([1,3,5,8,12], 7));

// 🧠 Two Pointer Question

// Given a sorted array, find the pair whose sum is closest to a target.
// Return that pair.

// 🔍 Example:
// Input: arr = [1,3,4,7,10], target = 15
// Output: [4,10]   // sum = 14 (closest)

// let arr = [1,3,4,7,10], target = 15;

// function findPair(arr, target) {
//     if (!Array.isArray(arr)) return null;

//     let i = 0;
//     let j = arr.length - 1;

//     let closestDiff = Infinity;
//     let result = [];

//     while (i < j) {
//         let sum = arr[i] + arr[j];
//         let diff = Math.abs(target - sum);

//         // update closest
//         if (diff < closestDiff) {
//             closestDiff = diff;
//             result = [arr[i], arr[j]];
//         }

//         if (sum === target) {
//             return result;
//         } else if (sum > target) {
//             j--;
//         } else {
//             i++;
//         }
//     }

//     return result;
// }

// findPair(arr,target);

/////////////////////........................................................
// 🧠 Two Pointer Question
// Given a sorted array, move all duplicate elements to the end of the array while keeping the order of unique elements same.
// Do it in-place.
// 🔍 Example:
// Input:  [1,1,2,2,3,4,4]
// Output: [1,2,3,4,1,2,4]
// 👉 First part → unique elements in order
// 👉 Remaining part → duplicates (any order is fine)

// let arr = [1,1,1,2,2,3];

// function moveDuplicatesAtEnd (arr){
//    if(!Array.isArray(arr)) return null;
//    let slow = 0;
//    let fast = 0;
//    while (fast < arr.length){
//     let temp = null;
//     if(arr[fast] !== arr[slow]){
//         slow++;
//         temp = arr[slow];
//         arr[slow] = arr[fast];
//         arr[fast] = temp;
//     }
//     fast++;
//    }
//    return arr;
// }

// console.log(moveDuplicatesAtEnd(arr));

// function moveDuplicatesAtEnd(arr) {
//     if (!Array.isArray(arr)) return null;

//     let n = arr.length;
//     let slow = 0;

//     // Step 1: place unique elements in front
//     for (let fast = 1; fast < n; fast++) {
//         if (arr[fast] !== arr[slow]) {
//             slow++;
//             arr[slow] = arr[fast];
//         }
//     }

//     // Step 2: fill duplicates at the end
//     let index = slow + 1;

//     for (let i = 0; i <= slow; i++) {
//         let count = 0;

//         for (let j = 0; j < n; j++) {
//             if (arr[j] === arr[i]) count++;
//         }

//         while (count > 1) {
//             arr[index] = arr[i];
//             index++;
//             count--;
//         }
//     }

//     return arr;
// }

// console.log(moveDuplicatesAtEnd([1,1,1,2,2,3]));

// 🧠 Two Pointer Question

// Given a sorted array, count the number of unique pairs whose sum equals a target.

// 🔍 Example:
// Input: arr = [1,1,2,2,3,4,4], target = 5
// Output: 2

// let arr = [1, 1, 2, 2, 3, 4, 4],
//   target = 5;
// let resultArray = [];
// let count = 0;
// let slow = 0;

// for (let fast = 1; fast < arr.length; fast++) {
//   if (arr[fast] !== arr[slow]) {
//     slow++;
//     arr[slow] = arr[fast];
//   }
// }

// let i = 0;
// let j = slow;
// while (i < j) {
//   if (arr[i] + arr[j] === target) {
//     resultArray.push([arr[i], arr[j]]);
//     count++;
//     i++;
//     j--;
//   } else if (arr[i] + arr[j] > target) {
//     j--;
//   } else {
//     i++;
//   }
// }

// console.log("Count is :", count);
// console.log("Result array is :",resultArray);

// // console.log("Slow index :",slow);
// // console.log("Updated array :",arr)

// function remove_duplicate (arr){
//     if(!Array.isArray(arr)) return null;

//     let slow = 0;
//     for(let fast = 0; fast<arr.length; fast++){
//         if(arr[fast] !== arr[slow]){
//             slow++;
//             arr[slow] = arr[fast]
//         }
//     }
//     return slow + 1 ;
// }

// console.log(remove_duplicate([1,1,2,2,3,4,4]));


// 🧠 Next Two Pointer Question (same level)

// Given a sorted array and a target,
// count how many pairs have sum less than target.

// 🔍 Example
// Input: arr = [1,2,3,4,5], target = 7
// Output: 6

// function find_pair_sum (arr,target){
//    if(!Array.isArray(arr) || !target) return null;

//    let pairCount = 0

//    for(let i=0; i<arr.length; i++){
     
//       for (let j= i+1; j<arr.length; j++){
//          if(arr[i] + arr[j] < target){
//             pairCount++;
//          }
//       }
//    }
//    return pairCount;
// }

// console.log(find_pair_sum([1,2,3,4,5],7));

// function find_Pair_count (arr,target){
//     if(!Array.isArray(arr) || !target) return null;

//     let totalPairCount = 0;
//     let i = 0;
//     let j= arr.length-1;
//     while(i<j){
//         if(arr[i] + arr[j] < target){
//             totalPairCount += (j-i);
//             i++;
//             j--;
//         } else if(arr[i] + arr[j] > target){
//             j--;
//         }
//     }
//     return totalPairCount;
// }

// console.log(find_Pair_count([1,2,3,4,5],7));  // this is wrong sloution for this question

// correct solution is .....
// function find_Pair_count(arr, target) {
//     if (!Array.isArray(arr)) return null;

//     let totalPairCount = 0;

//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {

//         if (arr[i] + arr[j] < target) {

//             totalPairCount += (j - i);

//             i++;

//         } else {

//             j--;
//         }
//     }

//     return totalPairCount;
// }

// console.log(find_Pair_count([1,2,3,4,5], 7));

// 🧠 Two Pointer Question

// Given a sorted array, find if there exists a pair whose difference equals target.

// 🔍 Example
// Input: arr = [1,3,5,8,12], target = 7
// Output: true

// function find_target (arr,target){
//     if(!Array.isArray(arr) || !target) return false;

//     let i=0;
//     let j= arr.length-1;
//     let isEqual = false;
//     while(i<j){
//         if(arr[j] - arr[i] > target){
//            j--;
//         } else if(arr[j] - arr[i] === target){
//             isEqual = true;
//             break;
//         }else {
//             i++;
//         }
//     }
//     return  isEqual;
// }

// console.log(find_target([1,3,5,8,12],7))