// question on linear search
// // Search an element in an array and return its index (or -1)

// let arr = [1,4,23,6,7,89,100,121,212,30,40,50,10];
// let element = 10;

// const searchElement = function (arr){
   
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === element){
//             return i;
//         }
//     }
//     return -1;
// }
// let returnedValue = searchElement(arr);
// console.log(returnedValue);

// Count how many times every  number appears in an array.

// let arr = [1,2,3,4,5,6,1,2,3,4,5,10,2,3];

// const elementfrequency = function (arr) {
   
//     let myObject = {};

//     for(let i=0; i<arr.length; i++){
//         let value = arr[i];
//         if(myObject[value]){
//             myObject[value]++;
//         }else{
//             myObject[value] = 1;
//         }
//     }

//     return myObject;
// }
// let elemFreq = elementfrequency(arr);
// console.log(elemFreq);

// // Count how many times a number appears.
// let arr = [1,2,3,4,5,6,1,2,3,4,5,10,2,3];
// let target = 2;

// ;((arr,target)=>{
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === target){
//             count++;
//         }
//     }
//     console.log(`${target} appears ${count} number of time`);
// })(arr,target);

// Find the first occurrence and last occurrence of a number.
let arr = [1,2,3,4,5,6,7,1,2,3,1,2,3];
let target = 3;
let firstOccurance = null;
let lastOccutance = null;
let count =0;

for(let i=0; i<arr.length ; i++){

    if(arr[i] === target && count === 0){
        firstOccurance = i;
        lastOccutance = i;
        count++;
    }else if(arr[i] === target){
        lastOccutance = i;
    }

}
console.log(`first occurance is : ${firstOccurance} and lastOccurence is : ${lastOccutance}`)


// function first_last_occurence (arr){
    
// }
// first_last_occurence(arr);