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




