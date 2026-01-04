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