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

function removeElement(nums, target) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

let arr = [1,2,3,2,4,2,5], target=2;

console.log(removeElement(arr,target))
