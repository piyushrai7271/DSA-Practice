// question on sorting technique like {Bubble sort and Selection sort}

//Sort an array in ascending order using Bubble Sort
//  [5, 3, 8, 4, 2]
// let arr =  [5, 3, 8, 4, 2];

// const bubbleSort = function (arr){

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }
// bubbleSort(arr);
// console.log(arr)

// NEW DAY............................

//Check if array is already sorted
// let arr = [1,2,3,4,5,6,7,8,11,10];
// let isSortedArray = true;

// function isSorted (arr){

//     for(let i=0; i<arr.length; i++){
//          if(arr[i] > arr[i+1]){
//             isSortedArray = false;
//             break;
//          }
//     }
//     return isSortedArray;
// }

// let boolValue = isSorted(arr)
// if(boolValue){
//     console.log("Array is sorted !!")
// }else {
//     console.log("Array is not sorted !!");
// }

//Sort array with insertion sort
// let arr = [9,5,0,5,8,2,7,1];

// function insertionSort (arr){

// }

// insertionSort(arr);

// Sort array with selection sort
// let arr = [9,5,0,5,8,2,7,1];

// function selectionSort (arr) {

// }

// selectionSort(arr);

// Add element in sorted array in sorted place

// let arr = [1,2,3,4,5,7,8,9,10];
// let elem = 6;
// console.log("Array length before insertion:",arr.length);
// function inserElement (arr,elem) {

//     for(let i=arr.length-1; i>=0; i--  ){
//         if(arr[i] > elem){
//            arr[i+1] = arr[i];
//         }else{
//             arr[i+1] = elem;
//             break;
//         }
//     }
// }

// inserElement(arr,elem);
// console.log("Array length after insertion",arr.length);
// console.log(arr);

// function insertElement(arr, elem) {
//     let i = arr.length - 1;

//     // extend array size
//     arr.length = arr.length + 1;

//     while (i >= 0 && arr[i] > elem) {
//         arr[i + 1] = arr[i];
//         i--;
//     }

//     arr[i + 1] = elem;

//     return arr;
// }

// let arr = [1,2,3,4,5,7,8,9,10];
// let elem = 6;

// console.log(insertElement(arr, elem));

// sort a array using bubble sort
// let arr = [8,4,1,0,9,7,6];

// function bubbleSort (arr) {

//     for(let i=0; i<arr.length-1 ; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j] > arr[j+1]){
//              let temp = arr[j+1];
//              arr[j+1] = arr[j];
//              arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));

// NEW DAY.....................

// bubble sort questions

// let arr = [8,5,7,3,2];

// for(let i=0; i<arr.length-1; i++){

//     for(let j = 0; j<arr.length-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr)

// insertion sort

// insert in sorted array

// let arr = [1,2,3,4,6,7,8,9,10];
// let elem = 0;
// let i;

// for( i=arr.length -1; i>= 0; i--){

//     if(arr[i] > elem){
//         arr[i+1] = arr[i];
//     }else{
//         break;
//     }
// }
// arr[i+1] = elem;
// console.log(arr);

// let arr = [1,2,3,4,6,7,8,9,10];
// let elem = 0;

// function insertionInSortedArray (arr,elem) {
//     let i;
//     for( i= arr.length-1; i>= 0; i--){
//         if(arr[i]>elem){
//             arr[i+1] = arr[i];
//         }else{
//             break;
//         }
//     }
//     arr[i+1] = elem;
//     return arr;
// }

// let insertedArray = insertionInSortedArray(arr,elem);
// console.log(insertedArray);

// sort array using bubble sort
// let arr = [9,2,8,5,3,0,1,4];

// function bubbleSort (arr) {

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const sortedArray = bubbleSort(arr);
// console.log(sortedArray);

// improved of bubble sort
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let swapped = false;

//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapped = true;
//             }
//         }

//         if (!swapped) break;
//     }
//     return arr;
// }

// insertion sort in sorted array
// let arr = [1,2,3,4,5,9,10];
// let elem = 0;
// let i;
// for( i=arr.length-1; i>=0; i--){

//     if(arr[i]>elem){
//         arr[i+1] = arr[i];
//     }else{
//         break;
//     }
// }
// arr[i+1] = elem;
// console.log(arr);

// let arr = [8,5,7,3,2];

// let arr = [9,2,8,5,3,0,1,4];

// sort the array using insertion sort
// let arr = [9,2,8,5,3,0,1,4];

// for(let i=1; i<arr.length; i++){

//     let j = i-1;
//     let x = arr[i];
//     while(j>-1 && arr[j]> x){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = x;
// }
// console.log(arr);

// Check if array is already sorted
// let arr = [2,3,4,8,10]

// function isSorted (arr){

//     let isSorted = true;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>arr[i+1]){
//             isSorted = false;
//             break;
//         }
//     }
//     return isSorted;

// }

// if(isSorted(arr)){
//     console.log("Array is sorted")
// }else {
//     console.log("Array is not sorted !!");
// }

// Sort array with insertion sort

// let arr = [9,5,8,7,1,0,3];

// function insertionSort (arr){

//     for(let i=1; i<arr.length; i++){

//         let j = i-1;
//         let x = arr[i];

//         while(j>-1 && arr[j]>x){
//             arr[j+1] = arr[j];
//             j--
//         }
//         arr[j+1] = x;
//     }
//     return arr;
// }

// console.log(insertionSort(arr));

// Sort array with bubble sort

// let arr = [9,5,8,7,1,0,3];

// const bubbleSort = function (arr) {

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));

// Find smallest and largest element after sorting

// let arr = [9,5,8,7,1,0,3];

// const findLargestAndSmallest = (arr)=>{

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     let smallestElement = arr[0];
//     let largestElement = arr[arr.length-1];
//     let secondLargest = arr[arr.length-2];
//     return {smallestElement,largestElement,secondLargest};
// }

// let {smallestElement,largestElement,secondLargest} = findLargestAndSmallest(arr);
// console.log("Smallest element in Array is :",smallestElement);
// console.log("Largest element in array is :",largestElement);
// console.log("Second largest is :",secondLargest)

// Find second smallest / second largest
// let arr = [9,7,1,4,0,5,10,2];

// function secondLargestAndSmallest (arr){

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     let secondLargest = arr[arr.length-2];
//     let secondSmallest = arr[1];
//     return {secondLargest,secondSmallest};
// }

// const {secondLargest,secondSmallest} = secondLargestAndSmallest(arr);
// console.log("Second Smallest number is :",secondSmallest);
// console.log("Second largest number is :",secondLargest);

// NEW DAY......................
// let arr = [0,1,1,1,0,0,1,0,1,0,1,0]

// function reArrange (arr) {

//     for(let i=0; i<arr.length-1; i++){

//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(reArrange(arr));

// previous question with updated version
// let arr = [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0];

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   if (arr[i] === 1 && arr[j] === 0) {
//     let temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//        i++;j--
//   } else if (arr[i] === 0){
//       i++;
//   } else if(arr[j] === 1){
//     j--;
//   }
// }

// console.log(arr);

// Sort array of 0s, 1s, 2s (Dutch flag – logic based)

// let arr = [1,1,0,2,0,2,1,0,0,1,2,2,0];

// let low = 0;
// let mid = 0;
// let high = arr.length-1;

// while(mid <= high){

//     if(arr[mid]=== 0){
//         let temp = arr[low];
//         arr[low] = arr[mid];
//         arr[mid] = temp;

//         low++;
//         mid++;
//     }else if(arr[mid] === 1){
//         mid++;
//     }else if(arr[mid] === 2){
//         let temp = arr[mid];
//         arr[mid] = arr[high];
//         arr[high] = temp;

//         high--;
//     }
// }
// console.log(arr);

// Merge two sorted arrays into one sorted array

// let arr = [1,3,5,7,9];
// let brr = [2,4,6,8,10];
// let crr = [];



// for(let i=0,j=0; i<arr.length && j<brr.length;){
//      if(arr[i]<brr[j]){
//         crr[crr.length] = arr[i];
//         i++
//      } else if (brr[j]<arr[i]){
//         crr[crr.length] = brr[j];
//         j++
//      }else if (i=== arr.length && j < brr.length){
//         crr[crr.length]= brr[j];
//         j++;
//      }else if(j=== brr.length && i < arr.length){
//         crr[crr.length] = arr[i];
//         i++
//      }
//      else if(arr[i] === brr[j]){
//         crr[crr.length] = arr[i];
//         i++;
//         j++
//      }
// }
// console.log(crr);

//Merge two sorted arrays into one sorted array
// let arr = [1,3,5,7,9];
// let brr = [2,4,6,8,10];
// let crr = [];

// let i=0;
// let j=0;

// while (i<arr.length && j<brr.length){
//     if(arr[i]<brr[j]){
//         crr[crr.length] = arr[i];
//         i++;
//     }else if(brr[j]<arr[i]){
//         crr[crr.length] = brr[j];
//         j++;
//     }else if(arr[i] === brr[j]){
//         crr[crr.length] = arr[i];
//         i++;
//         j++;
//     }
//     else if(i === arr.length-1 && j < arr.length-1 ){
//         crr[crr.length] = brr[j];
//         j++
//     }else {
//         crr[crr.length] = arr[i];
//         i++;
//     }
// }
// console.log(crr);

// merge two sorted array in single array 
// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let combineNumber = [];

// let i=0;
// let j=0;

// while( i < odd.length && j < even.length){
//     if(odd[i] < even[j]){
//         combineNumber.push(odd[i]);
//         i++;
//     }else{
//         combineNumber.push(even[j]);
//         j++
//     }
// }

// while (i < odd.length){
//     combineNumber.push(odd[i]);
//     i++;
// }

// while(j < even.length){
//     combineNumber.push(even[j]);
//     j++;
// }

// console.log(combineNumber);

// Remove duplicates from a sorted array

// let arr = [1,2,3,4,5,5,6,6,6,8,9,9,10,10];
// let myObject = {};

// for(let i=0; i<arr.length; i++){
    
//     let value = arr[i];
//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }
// let uniqueArray = [];
// for (const key in myObject) {
//     uniqueArray.push(key);
// }
// console.log(uniqueArray);
// Remove duplicates from a sorted array

// let arr = [1,2,3,4,5,5,6,6,6,8,9,9,10,10];
// let duplicates = [];
// let duplicateElement = null;
// let i=0;
// let j=i+1;

// while(j<arr.length-1){
//     if(arr[i] !== arr[j]){
//         i++;
//         j++;
//     }else if(arr[i] === arr[j]){
//         duplicateElement = arr[j];
//         arr[j] = arr[j+1];
//         j++
//     }
// }
// console.log(arr);

let arr = [1,2,3,4,5,5,6,6,6,8,9,9,10];

let slow = 0;

for (let fast = 1; fast < arr.length; fast++) {
  if (arr[fast] !== arr[slow]) {
    slow++;
    arr[slow] = arr[fast];
  }
}

// unique elements are from index 0 to slow
console.log(arr.slice(0, slow + 1));
console.log("New length:", slow + 1);


