// Question 1 — Palindrome
// Write a function that returns true if a string is a palindrome.
// Example 1
// Input:
// "madam"

// Output:
// true

// function isPalindrom (str) {
//   if(str.length === 0) return false;

//   for(let left = 0, right = str.length-1; left<right ; left++,right--){
//     if(str[left] !== str[right]){
//         return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrom("madam"));


// Question 2 — Anagram
// Return true if two strings are anagrams.
// Example
// Input:
// listen
// silent
// Output:
// true

// function isAnagram (str1,str2){
//     if(typeof str1 || typeof str2 !== "string") return false;
//     if(str1.length !== str2.length) return false;

//     let str1S = str1.toLowerCase();
//     let str2S = str2.toLowerCase();

//     let myObject = {};
//     for(let i=0; i<str1S.length; i++){
//         let value = str[i];
//         if(myObject[value]){
//             myObject[value]++;
//         } else {
//             myObject[value] = 1;
//         }
//     }

//     for(let i=0; i<str2S.length; i++){
//         let value = str2S[i];
//         if(!myObject[value]){
//             return false; 
//         } else {
//             myObject[value]--;
//         }
//     }

//     return true;
// }

// console.log(isAnagram("listen","silent"));


// Question 3 — Character Frequency
// Write a function that returns the frequency of every character in a string.
// Example
// Input:
// "aabcc"

// Output:
// {
//   a: 2,
//   b: 1,
//   c: 2
// }

// function returnFrequency (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let myObject = {};
//     for(let i=0; i<str.length; i++){
//         let value = str[i];
//         if(myObject[value]){
//             myObject[value]++;
//         }else {
//             myObject[value] = 1;
//         }
//     }
//     return myObject;
// }

// console.log(returnFrequency("aabbccd"));

// function returnCounter (str){
//     if(typeof str !== "string" || str.length === 0) return null;

//     let myMap = new Map();
//     for(let i=0; i<str.length; i++){
//         let value = str[i];
//         if(myMap.has(value)){
//             myMap.set(value, myMap.get(value) + 1);
//         } else {
//             myMap.set(value,1);
//         }
//     }
//     return myMap
// }

// console.log(returnCounter("aabbccd"));

// Question 4 — Majority Element
// Given an array, return the element that appears more than n/2 times.
// Example 1
// Input:
// [3,3,4,2,3,3,5]
// Output:
// 3

// function majorityElement (arr) {
//    if(arr.length === 0) return null;

//    let myObject = {};
//    let x = arr.length/2;

//    for(let i=0; i<arr.length; i++){
//      let value = arr[i];
//      if(myObject[value]){
//         myObject[value]++
//      }else {
//         myObject[value] = 1;
//      }
//    }
   
//    for (const key in myObject) {
//       if(myObject[key] > x){
//         return key;
//       }
//    }
//    return null;
// }

// console.log(majorityElement([3,3,4,2,3,3,5]));

function twoSum(nums, target) {
    let myObject = {};

    for (let i = 0; i < nums.length; i++) {

        let current = nums[i];
        let needed = target - current;

        if (myObject[needed] !== undefined) {
            return [myObject[needed], i];
        }

        myObject[current] = i;
    }

    return [];
}

console.log(twoSum([2,7,11,15], 9));

