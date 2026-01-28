// question based on prefix based.......

//For every query, find the sum of elements from index L to R (inclusive).
// let arr = [3, 6, 2, 8, 9, 4];

// function sumOfElement (l,r,arr){
//      let sum = 0;
//     for(let i=l; i<=r; i++){
//          sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log("Required query sum is :", sumOfElement(1,3,arr));

// let arr = [3, 6, 2, 8, 9, 4];
// let n = arr.length;

// // Build prefix sum array
// let prefix = [];
// prefix[0] = arr[0];

// for (let i = 1; i < n; i++) {
//   prefix[i] = prefix[i - 1] + arr[i];
// }

// // 2️⃣ Function to get range sum using prefix sum
// function rangeSum(l, r) {
//   if (l === 0) {
//     return prefix[r];
//   } else {
//     return prefix[r] - prefix[l - 1];
//   }
// }

// // Example queries
// console.log(rangeSum(1, 3)); // 16
// // console.log(rangeSum(2, 5)); // 23
// console.log(rangeSum(0, 4)); // 28
//You are given an integer array arr of size n.

// let arr = [2,4,6,8,10];
// let prifix = [];
// prifix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prifix[i] = prifix[i-1] + arr[i];
// }
// console.log(prifix);

// Using prefix sum, find the sum of elements from index L to R (inclusive).
// let arr = [1, 3, 5, 7, 9] ,L = 1 ,R = 3
// let prefix = [];

// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }

// function sumOfElement (l,r){
//    if(l === 0){
//     return prefix[r];
//    }else {
//     return prefix[r] - prefix[l-1];
//    }
// }
// console.log(sumOfElement(L,R));

// Using prefix sum, find the sum of elements between indices L and R, excluding the elements at indices L and R.
// let arr = [2, 5, 7, 3, 6, 4] ,L = 1 ,R = 4;
// let prefix = [];
// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }

// function sumOfElement (l,r){
//    if(l === 0){
//     return prefix[r-1] - prefix[0];// here we don't need l == 0
//    }else {
//     return prefix[r-1] - prefix[l];
//    }
// }
// console.log(sumOfElement(L,R));

// updated code as we don't need for l=0

// let arr = [2, 5, 7, 3, 6, 4] ,L = 0 ,R = 2;
// let prefix = [];
// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }

// function sumOfElement (l,r){
//    return prefix[r-1] - prefix[l];
// }
// console.log(sumOfElement(L,R));

//Using prefix sum, find the sum of elements from index L to R, but only at even indices.

// let arr = [5, 3, 8, 2, 7, 4, 6];
// let L = 1, R = 5;

// let prefix = [];

// // build prefix sum for EVEN indices only
// prefix[0] = 0;           // index 0 is even
// prefix[0] = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     prefix[i] = prefix[i - 1] + arr[i];
//   } else {
//     prefix[i] = prefix[i - 1];
//   }
// }

// // range sum
// function evenIndexRangeSum(l, r) {
//   if (l === 0) {
//     return prefix[r];
//   } else {
//     return prefix[r] - prefix[l - 1];
//   }
// }

// console.log(evenIndexRangeSum(L, R)); // 15

// New day................

// let arr = [2,4,6,8,10,12,14,16,18,20];
// let prefix = [];
// prefix[0]=arr[0];

// for(let i=1; i<arr.length; i++){
//    prefix[i] = prefix[i-1] + arr[i];
// }
// console.log(prefix)

// function sumOfElement (l,r){
//   if(l === 0){
//     return prefix[r];
//   }else{
//     return prefix[r] - prefix[l-1];
//   }
// }

// const sumBetweenArrayIndex = sumOfElement(0,5);
// console.log(`sum between given index of array is:`,sumBetweenArrayIndex);

// let arr = [5,3,8,2,7,4,6];
// let prefix = [];
// prefix[0]=0;
// prefix[0]=arr[0];

// for(let i=1; i<arr.length; i++){
//   if(i%2 === 0){
//     prefix[i] = prefix[i-1] + arr[i];
//   }else{
//     prefix[i] = prefix[i-1];
//   }
// }

// // range sum
// function evenIndexRangeSum (l,r){
//   if(l===0){
//     return prefix[r];
//   }else{
//     return prefix[r] - prefix[l-1];
//   }
// }
// console.log(evenIndexRangeSum(1,5));

//You are given an integer array arr of size n.Build a prefix sum array such that:
//prefix[i] = sum of elements from index i to the end of the array
//(⚠️ This is a reverse prefix sum)

// let arr = [1,2,3,4,5]
// let prefix = [];
// prefix[arr.length-1] = arr[arr.length-1];

// for(let i=arr.length-2; i>-1; i--){
//   prefix[i] = prefix[i+1] + arr[i];
// }
// console.log(prefix);

//Build a prefix sum array such that: prefix[i] = sum of all elements ≤ 5 from index 0 to i
//(⚠️ Only include elements whose value is ≤ 5)

// let arr = [6, 2, 5, 1, 7, 4, 3]
// let prefix = [];
// if(arr[0]<=5){
//   prefix[0] = arr[0];
// }else {
//   prefix[0] = 0;
// }

// for(let i=1; i<arr.length; i++){
//    if(arr[i] <= 5){
//     prefix[i] = prefix[i-1] + arr[i]
//    }else {
//     prefix[i] = prefix[i-1] + 0;
//    }
// }
// console.log(prefix);

// How many even numbers are present between index L and R (inclusive)?
//arr = [2, 3, 4, 6, 5, 8, 7]
//Queries:
//(0, 3)
//(2, 5)
//(1, 6)

// let arr = [2,3,4,6,5,8,7];
// let prefix = [];

// if(arr[0] % 2 === 0){
//   prefix[0] = 1;
// }else {
//   prefix[0] = 0;
// }

// for(let i=1; i<arr.length; i++){
//   if(arr[i] % 2 === 0){
//     prefix[i] = prefix[i-1] + 1;
//   }else {
//     prefix[i] = prefix[i-1] + 0
//   }
// }
// console.log(prefix);

// // answer query

// function countEven (l,r){
//    if(l === 0){
//      return prefix[r];
//    }else {
//     return prefix[r] - prefix[l-1];
//    }
// }
// console.log("Even number between l and r :",countEven(1,5));

//Count number of elements divisible by 3 between L and R using prefix
// let arr = [2,3,6,5,7,9,12,15,17,21];
// let prefix = [];

// if(arr[0] % 3 === 0){
//     prefix[0] = 1;
// }else {
//     prefix[0] = 0;
// }

// for (let i = 1; i < arr.length; i++) {
//     if(arr[i] % 3 === 0){
//         prefix[i] = prefix[i-1] + 1;
//     }else{
//         prefix[i] = prefix[i-1] + 0;
//     }
// }

// function divisibleCount (l,r){
//     if(l === 0){
//         return prefix[r];
//     }else{
//         return prefix[r] - prefix[l-1];
//     }
// }

// console.log(divisibleCount(1,8));

// Build a prefix array such that:  Only positive numbers should be added
// let arr = [-2, 3, -1, 5, 4, -6, 2]
// let prefix = [];

// if(arr[0]>-1){
//     prefix[0] = arr[0];
// }else {
//     prefix[0] = 0;
// }

// for(let i=1; i<arr.length; i++){
//     if(arr[i]>-1){
//         prefix[i] = prefix[i-1] + arr[i];
//     }else{
//         prefix[i] = prefix[i-1] + 0;
//     }
// }

// function positiveSum (l,r){
//     if(l=== 0){
//         return prefix[r];
//     }else{
//         return prefix[r] - prefix[l-1];
//     }
// }
// console.log(positiveSum(1,4));

// Find the sum of all subarrays that start at index 0.
// Input
// let arr = [2, 4, 1, 3];
// let prefix = [];
// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }
// for(let j=0; j<prefix.length; j++){
//     console.log(prefix[j]);
//}

// Print sum of all subarrays that end at the last index
// let arr = [2, 4, 1, 3];
// let prefix = [];
// prefix[arr.length-1] = arr[arr.length-1];

// for(let i=arr.length-2; i>=0 ; i--){
//     prefix[i] = prefix[i+1] + arr[i];
// }
// for(let j= arr.length-1; j>=0; j--){
//     console.log(prefix[j]);
// }

// You are given an integer array arr. 
// Build a prefix sum array such that: sum of elements from index 0 to i that are odd numbers

// let arr = [4, 1, 3, 2, 5, 6]
// let prefix = [];

// if(arr[0] % 2 !== 0){
//     prefix[0] = arr[0];
// }else {
//     prefix[0] = 0;
// }

// for(let i=1; i<arr.length ; i++){
//     if(arr[i] % 2 !== 0){
//         prefix[i] = prefix[i-1] + arr[i];
//     }else{
//         prefix[i] = prefix[i-1] + 0;
//     }
// }
// console.log(prefix);

// You are given an integer array arr. Build a prefix array such that:
// prefix[i] = (sum of all even numbers from index 0 to i)
//           − (sum of all odd numbers from index 0 to i)

// let arr = [5, 2, 3, 8, 1, 4]
// let prefix = [];

// if(arr[0] % 2 !== 0){
//     prefix[0] = 0 - arr[0];
// }else{
//     prefix[0] = 0 + arr[0];
// }

// for(let i=1; i<arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         prefix[i] = prefix[i-1] - arr[i];
//     }else {
//         prefix[i] = prefix[i-1] + arr[i];
//     }
// }
// console.log(prefix);

// OPTIMIZED PREFIX SUM QUESTION..............
//Count subarrays whose sum is exactly K.
// let arr = [1, 2, 1, 3] , K = 3
// let prefix = [];
// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }

// let count = 0;

// for(let l=0; l<arr.length; l++){
//     for(let r=l ; r<arr.length; r++){

//         let sum;
//         if(l===0){
//             sum = prefix[r];
//         }else{
//             sum = prefix[r] - prefix[l-1];
//         }

//         if(sum === K){
//             count++;
//         }
//     }
// }
// console.log(count);

//Count the number of subarrays whose sum is greater than or equal to K.
// let arr = [2, 1, 3, 2] ,K = 4;
// let prefix = [];

// prefix[0] = arr[0];

// for(let i=1; i<arr.length; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }

// let subarrCount =0 ;
// for(let l = 0 ; l<arr.length; l++){
//     for(let r = l; r<arr.length; r++){
//        let sum;
//        if(l===0){
//         sum = prefix[r];
//        }else {
//         sum = prefix[r] - prefix[l-1];
//        }
//        if(sum >= K){
//         subarrCount++
//        }
//     }
// }
// console.log(subarrCount);