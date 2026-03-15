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
