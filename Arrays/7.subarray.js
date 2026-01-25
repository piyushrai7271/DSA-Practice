// prifix + subarray problems

// Print all subarrays of the given array.
// arr = [1, 2, 3]

// let arr = [1,2,3];

// for(let i=0; i<arr.length; i++){

//     for(let j=i; j<arr.length; j++){
//         let subarr = "";
//          for(let k = i ; k<= j ; k++){
//             subarr += arr[k] + " "
//          }
//          console.log(subarr.trim());
//     }
// }

// Print sum of all subarrays

// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {          // start
//   for (let j = i; j < arr.length; j++) {        // end

//     let sum = 0;
//     for (let k = i; k <= j; k++) {               // sum elements
//       sum = sum + arr[k];
//     }

//     console.log(sum);
//   }
// }

// Print all subarrays of length 2.
// let arr = [4, 7, 1, 3];

// for(let i=0; i<arr.length-1; i++){
//       let subarr = [];
//     for(let j=i; j<i+2; j++){
//          subarr.push(arr[j]);
//     }
//     console.log(subarr);
// }

//Print all subarrays of length 3.
// let arr = [2, 5, 1, 6, 3]
// const subLength = 3;

// for(let i=0; i<arr.length-(subLength-1); i++){
//     let subarr = [];
//     for(let j=i; j<i+subLength; j++){
//         subarr[subarr.length] = arr[j];
//     }
//     console.log(subarr);
// }

// Print all subarrays of length k, where k = 2.
// let arr = [1, 3, 5, 7, 9] , k = 2
// for(let i=0; i<arr.length-(k-1); i++){
//     let subarr = [];
//     for(let j=i; j<i+k; j++){
//         subarr[subarr.length] = arr[j];
//     }
//     console.log(subarr);
// }

//Print the SUM of each subarray of length k
// let arr = [1, 3, 5, 7, 9] , k = 3

// for(let i=0; i<arr.length-(k-1); i++){
//      let sum = 0;
//     for(let j=i; j<i+k; j++){
//        sum = sum + arr[j];
//     }
//     console.log(sum);
// }

// Find the maximum sum subarray of length k
// let arr = [2, 1, 5, 1, 3, 2] , k = 3;
// let maxiSumSubarr = 0;

// for(let i=0; i<arr.length-(k-1) ; i++){
//      let sum = 0;
//     for(let j=i; j<i+k; j++){
//        sum = sum + arr[j];
//     }
//     if(sum > maxiSumSubarr){
//         maxiSumSubarr = sum;
//     }
// }
// console.log(maxiSumSubarr);

// Print the subarray (not just sum) that has the maximum sum of length k.

// let arr = [2, 1, 5, 1, 3, 2], k = 3;
// let maxiSumSubarr = -Infinity;
// let subarr = [];

// for(let i=0; i<arr.length-(k-1); i++){
//     let sum = 0;
//     let inerSubarray = [];
//     for(let j=i; j<i+k; j++){
//         inerSubarray[inerSubarray.length] = arr[j];
//         sum = sum + arr[j];
//     }
//     if(sum > maxiSumSubarr){
//         maxiSumSubarr = sum;
//         subarr = [];
//         subarr.push(...inerSubarray);
//     }
// }
// console.log(subarr);

// 👉 Print the sum of every subarray whose length is EVEN.

// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {

//         let length = j - i + 1;

//         // check even length
//         if (length % 2 === 0) {
//             let sum = 0;

//             for (let k = i; k <= j; k++) {
//                 sum = sum + arr[k];
//             }

//             console.log("Subarray:", arr.slice(i, j + 1), "Sum =", sum);
//         }
//     }
// }

//  {/*1-Choose a start index,  2-Choose an end index, 3-Check subarray length
//  4-If length is even, 5-Calculate its sum 6-Print it*/}

// Count how many subarrays have a sum greater than 5.
// let arr = [1, 2, 3, 4];
// let count = 0
// let target = 5

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//            sum = sum + arr[j];
//            if(sum > target){
//             count ++;
//            }
//     }

// }
// console.log(count);

// Count subarrays whose sum is EVEN
// let arr = [1, 2, 3, 4];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j  = i; j  < arr.length; j++) {
//         sum = sum + arr[j];
//         if(sum % 2 === 0){
//             count ++
//         }

//     }
// }
// console.log(count);

//Find the length of the longest subarray whose sum is ≤ K.
// let arr = [2, 1, 5, 1, 3, 2],
//   K = 7;
// let largestSubarr = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum = sum + arr[j];

//     if (sum <= K) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   if (count > largestSubarr) {
//     largestSubarr = count;
//   }
// }
// console.log(largestSubarr);

// Count subarrays whose sum is ≤ K
// let arr = [2, 1, 3] , K = 4;
// let count = 0;

// for(let i=0; i<arr.length; i++){
//     let sum = 0;
//     for(let j=i; j<arr.length; j++){
//         sum = sum + arr[j];
//           if(sum <= K){
//              count ++;
//           }else {
//             break;
//           }
//     }
// }
// console.log(count);

// Find the length of the smallest subarray whose sum is ≥ K.
// let arr = [2, 3, 1, 2, 4, 3];
// let K = 7;
// let smallestSubarrLength = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;

//     for (let j = i; j < arr.length; j++) {
//         sum = sum + arr[j];

//         if (sum >= K) {
//             let length = j - i + 1;
//             if (length < smallestSubarrLength) {
//                 smallestSubarrLength = length;
//             }
//             break; // no need to expand further
//         }
//     }
// }

// console.log(
//   smallestSubarrLength === Infinity ? 0 : smallestSubarrLength
// );


