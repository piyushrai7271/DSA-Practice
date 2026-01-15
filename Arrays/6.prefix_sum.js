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

let arr = [5, 3, 8, 2, 7, 4, 6];
let L = 1, R = 5;

let prefix = [];

// build prefix sum for EVEN indices only
prefix[0] = 0;           // index 0 is even
prefix[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (i % 2 === 0) {
    prefix[i] = prefix[i - 1] + arr[i];
  } else {
    prefix[i] = prefix[i - 1];
  }
}

// range sum
function evenIndexRangeSum(l, r) {
  if (l === 0) {
    return prefix[r];
  } else {
    return prefix[r] - prefix[l - 1];
  }
}

console.log(evenIndexRangeSum(L, R)); // 15


