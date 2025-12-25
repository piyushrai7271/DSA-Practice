// const arr = [11,20,30,41,30,20,51,100,60,70,80,90];
// console.log("Array length is :",arr.length);

// let even = [];
// let odd  = [];
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] % 2 === 0){
//         even.push(arr[index]);
//     }else {
//         odd.push(arr[index]);
//     }
// }

// console.log("Even number are :")
// even.map((elem)=>{
//     console.log(elem)
// })

// console.log("Odd number are :")
// odd.map((elem)=>{
//     console.log(elem);
// })

// const arr = [11,20,30,41,30,20,51,100,60,70,80,90];

// let count = 0;

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] % 2 === 0){
//         count++;
//     }
// }

// console.log("Total even number in array are :",count);

// const countObj = {};

// for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (countObj[num]) {
//         countObj[num]++;
//     } else {
//         countObj[num] = 1;
//     }
// }

// for (let key in countObj) {
//     console.log(`${key} appears ${countObj[key]} times`);
// }

//Object ...

// let myObject = {
//     2:1,
//     3:4,
//     5:6,
//     7:8,
//     9:10
// }

// for (const key in myObject) {
//      console.log(`Key in the Object is ${key} and value in object ${myObject[key]}`);
    
// }


// let arr = [2,4,6,4,8,6,10,12,10,10,2,15];

// let myObject = {};

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }

// for (const key in myObject) {
//     console.log(`Element ${key} comes ${myObject[key]} number of times`);
// }


// let myObject = {
//     "1":2,
//     "2":3,
//     "3":4,
//     "4":5
// }
// console.log(myObject[1]);

// second largest number

// let arr = [2,4,6,4,8,6,10,12,10,10,2,15];


// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let index = 0; index < arr.length; index++) {
//     let num = arr[index];
//      if(num > largest){
//          secondLargest = largest;
//          largest = num
//      } else if (num > secondLargest && num !== largest){
//         secondLargest = num;
//      }
// }

// console.log("Second largest number is :",secondLargest)


// Rmove duplicate element of an array

// let arr = [2,4,6,4,8,10,8,2,12,14,16,10,40];

// removing duplicate element from an array

// let unique = [];

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];
//     let found = false;   // flag to check duplicate

//     // check if value already exists in unique array
//     for (let j = 0; j < unique.length; j++) {
//         if (unique[j] === value) {
//             found = true;   // duplicate found
//             break;          // no need to check further
//         }
//     }

//     // if not found, push into unique
//     if (!found) {
//         unique[unique.length] = value;   // manual push
//     }
// }

// console.log(unique);

// uning include

// for (let i = 0; i < arr.length; i++) {

//     let value = arr[i];
    
//     if(!unique.includes(value)){
//         unique.push(value);
//     }
// }

// console.log(unique);

//Count how many times each element appears in an array


// let arr = [2,4,6,4,8,10,8,2,12,14,16,10,40];

// let myObject = {};

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(myObject[value]){
//         myObject[value]++;
//     } else {
//         myObject[value] = 1 ;
//     }
    
// }

// console.log(myObject);

// let arr = [2,4,6,4,8,10,8,2,12,14,16,10,40];

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;


// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(value > firstLargest){
//         secondLargest = firstLargest;
//         firstLargest = value;
//     }

//     if(value > secondLargest && value!== firstLargest){
//         secondLargest = value;
//     }
    
// }

// console.log("Second largest is :",secondLargest);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// Remove duplicates from an array (without using Set).

// let unique = [];

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];
//     if(!unique.includes(value)){
//         unique.push(value);
//     }
// }

// console.log(unique);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// Count how many times each element appears in an array.

// let myObject = {};

// for (let i = 0; i < arr.length; i++) {

//     let value = arr[i];
    
//     if(myObject[value]){
//         myObject[value]++;
//     } else {
//         myObject[value] = 1;
//     }
    
// }

// console.log(myObject);

// Find the second largest number.

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];


// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(value > largest){
//         secondLargest = largest;
//         largest = value;
//     }

//     if(value > secondLargest && value !== largest){
//         secondLargest = value;
//     }
    
// }

// console.log("Second largest number is :",secondLargest);

// third largest number in array

// let largest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(value > largest){
//         thirdLargest = secondLargest;
//         secondLargest = largest ;
//         largest = value
//     }

//     else if(value > secondLargest  && value < largest){
//          thirdLargest = secondLargest;
//          secondLargest = value;
//     }

//     else if(value > thirdLargest && value < secondLargest){
//         thirdLargest = value
//     }
    
// }

// console.log("largest element in array is  :",largest);
// console.log("SecondLargest number in array is :",secondLargest);
// console.log("ThirdLargest number in array is :",thirdLargest);

// FRIDAY PRACTICE :- 

//Remove duplicates from an array (without using Set)

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// let unique = [];

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(!unique.includes(value)){
//         unique.push(value)
//     }
    
// }

// console.log(unique);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// let unique = [];

// for (let i = 0; i < arr.length; i++) {

//     let value = arr[i];
//     let found = false; // flag to check duplicates manually

//     // check manually if value already exists in unique[]
//     for (let j = 0; j < unique.length; j++) {
//         if (unique[j] === value) {
//             found = true; 
//             break;       // stop loop if found
//         }
//     }

//     // if not found → push manually
//     if (!found) {
//         unique[unique.length] = value;  // manual push
//     }
// }

// console.log(unique);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// Count how many times each element appears in an array.


// let myObject = {};

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(myObject[value]){
//         myObject[value]++;
//     } else{
//         myObject[value] = 1;
//     }
    
// }

// console.log(myObject);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// const arr = [2,2,2,2,2,2]

// Find the second largest number.

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {

//     let value = arr[i];
    
//     if(value > firstLargest){
//         secondLargest = firstLargest;
//         firstLargest = value;
//     }

//     if(value > secondLargest && value !== firstLargest){
//        secondLargest = value
//     }
    
// }

// console.log("first largest :",firstLargest);
// console.log("second largest :",secondLargest);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// let firstlargest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest  = -Infinity;

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     if(value > firstlargest){
//         thirdLargest = secondLargest;
//         secondLargest = firstlargest;
//         firstlargest = value;
//     }

//     if(value > secondLargest && value !== firstlargest){
//         thirdLargest = secondLargest;
//         secondLargest = value
//     }

//     if(value > thirdLargest && value !== secondLargest && value < secondLargest){
//         thirdLargest = value
//     }
// }

// console.log("First largest is :",firstlargest);
// console.log("SEcond largest is :",secondLargest);
// console.log("third largest is :",thirdLargest);


// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// const arr = [2,0,1,3,0.5];

// let smallest = +Infinity;
// let secondSmallest = +Infinity;


// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     if(value < smallest){
//         secondSmallest = smallest;
//         smallest = value;
//     }

//     else if(value < secondSmallest && value > smallest){
//         secondSmallest = value
//     }
    
// }

// console.log("first smallest is :",smallest);
// console.log("second smallest is :",secondSmallest);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18];

// // find the third smallest number in array

// let smallest = +Infinity;
// let secondSmallest = +Infinity;
// let thirdSmallest = +Infinity;

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     if(value < smallest ){
//         thirdSmallest = secondSmallest;
//         secondSmallest = smallest;
//         smallest = value
//     }

//     else if (value <secondSmallest && value > smallest){
//         thirdSmallest = secondSmallest
//         secondSmallest = value;
//     }

//     else if( value < thirdSmallest && value > secondSmallest){
//         thirdSmallest = value;
//     }
    
// }

// console.log(`First smallest : ${smallest} and Second smallest is ${secondSmallest} and third Smallest : ${thirdSmallest}`);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// //Split an array into two halves.

// let firstHalf = [];
// let secondHalf = [];
// let halflengthOfArray = Math.round((arr.length)/2);


// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];
//     if(index < halflengthOfArray){
//         firstHalf.push(value)
//     } else {
//         secondHalf.push(value);
//     }
// }

// console.log(firstHalf)
// console.log(secondHalf);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// Create a new array with squares of each element.

// let newArray = []

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     let duble = value * value;

//     newArray.push(duble);
// }

// console.log(newArray);

// console.log(arr.map((elem)=>{return  elem * elem }));

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// // Check if an array is sorted in ascending order.

// let lastElement = 0;

// for (let index = 0; index < arr.length; index++) {
    
//     let currentElement = arr[index];

//     if(lastElement > currentElement){
//         console.log("Not in assecding order");
//         break;
//     }

//     lastElement = currentElement;
    
// }

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];
// console.log(arr);


// //Add a number at the beginning and at the end without using unshift() / push().

// function manuallyunShift (arr,elem) {
     
//     for (let index = arr.length -1 ; index >= 0 ; index--) {
        
//            arr[index + 1] = arr[index]
        
//     }

//     arr[0] = elem;

//     return arr;
// }

// let newArray = manuallyunShift(arr,10);
// console.log(newArray);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// Rotate array right by 1 step — Example: [1,2,3,4] → [4,1,2,3].


// function manuallyShift (arr) {

//     let lastElem = arr[arr.length-1];
     
//     for (let i = arr.length -2 ; i >= 0 ; i--) {
//             arr[i+1] =arr[i]
//     }
//     arr[0] = lastElem;

//     return arr;

// }

// let shiftedArray = manuallyShift(arr);
// console.log(shiftedArray)

// MERGE TWO ARRAY 

// let arr = [2,4,6,8,10];
// let brr = [12,14,16,18,20];
// let crr = [];

// let index = 0;

// for(let i = 0; i < arr.length ; i++){
//     crr[index] = arr[i];
//     index ++;
// }

// for(let j = 0; j < arr.length ; j++){
//     crr[index] = brr[j];
//     index ++;
// }

// crr.map((elem)=>console.log(elem));

// find third smallest number in the array

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// let firstSmallest = +Infinity;
// let secondSmallest = +Infinity;
// let thirdSmallest  = +Infinity;

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     if(value < firstSmallest){
//         thirdSmallest = secondSmallest;
//         secondSmallest = firstSmallest;
//         firstSmallest = value
//     }

//     else if(value < secondSmallest && value > firstSmallest){
//         thirdSmallest = secondSmallest;
//         secondSmallest = value;
//     }

//     else if(value < thirdSmallest && value > secondSmallest) {
//          thirdSmallest = value;
//     }
    
// }

// console.log("First smallest is :",firstSmallest);
// console.log("Second smallest is :",secondSmallest);
// console.log("Third smallest is :",thirdSmallest);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// Filter elements greater than the average value of the array.

// let averageOfArray = 0;
// let sumOfArray = 0 ;

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     sumOfArray = sumOfArray + value;
// }

// averageOfArray = Math.round(sumOfArray/arr.length);
// console.log(averageOfArray);

// for(let i = 0 ; i< arr.length ; i++){
     
//     let value = arr[i];

//     if(value > averageOfArray){
//         console.log(value)
//     }
// }

// Segregate numbers into odd array and even array separately.

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// let oddArray = [];
// let evenArray = [];

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];
//     if(value % 2 === 0){
//       evenArray.push(value);
//     } else {
//          oddArray.push(value);
//     }
// }
// console.log("Odd elem")
// oddArray.map((elem)=>console.log(elem));
// console.log("Odd array :")
// evenArray.map((elem)=>console.log(elem));

// let arr = [2,4,6,[8,10,12,14],16,18,[20,22]];

//Convert a nested array into a single flat array. Example: [[1,2],[3,4],[5]] → [1,2,3,4,5].

// let newArray = [];

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];
//     let type = typeof(value)
    

//     if(type === "number" ){
//         newArray.push(value)
//     } else if(type !== "number"){
//         for (let j = 0; j < value.length; j++) {
//             let smallVal = value[j];
//             newArray.push(smallVal);
            
//         }
//     }
// }

// console.log(newArray);

// let arr = [2,4,6,[8,10,12,14],16,18,[20,22]];

//Convert a nested array into a single flat array. Example: [[1,2],[3,4],[5]] → [1,2,3,4,5].

// function manuallyFlatten(arr, result = []) {
    
//     for (let i = 0; i < arr.length; i++) {

//         let value = arr[i];

//         if (Array.isArray(value)) {
//             // If value is array → recursively flatten it
//             manuallyFlatten(value, result);
//         } 
//         else {
//             // If value is number → push to result
//             result[result.length] = value;   // manual push
//         }
//     }

//     return result;
// }

// const arr = [1, [2, [3, [4, [5]]]], 6];

// console.log(manuallyFlatten(arr));


// let newArray = [];

// for(let i = 0; i < arr.length ; i++){

//     let value = arr[i];

//     if(!Array.isArray(value)){
//         newArray[newArray.length] = value;
//     } else {
//         for(let j = 0; j < value.length; j++){
//             newArray[newArray.length] = value[j];
//         }
//     }
// }

// console.log(newArray);


// const arr = [2,4,[6,[8,10,[12,14,[16,18],20],22],24],28,30];

// let newArray = [];

// for(let i=0; i < arr.length; i++){

//     let value = arr[i];

//     if(!Array.isArray(value)){
//         newArray[newArray.length] = value
//     } else if( Array.isArray(value)){
//         for(let j = 0; j < value.length; j++){
//             newArray[newArray.length]=value;
//         }
//     }
// }


// console.log(arr.flat(Infinity)); // uning array method

// find the pair in an array whose sum is equal to a given number.

// let arr = [2,4,5,7,8];
// let targetArray = [];
// let target = 9;

// for(let i = 0; i < arr.length; i++){

//     let value = arr[i];

//     for(let j = i+1 ; j < arr.length ; j++){
//         if((value + arr[j]) == target){
//             targetArray.push([value,arr[j]]);
//         }
//     }
// }

// console.log(targetArray);

// const arr = [2,4,6,2,8,10,0,12,14,16,10,20,6,18,21];

// // find the third largest element in aaray

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;


// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(value > firstLargest){
//         thirdLargest = secondLargest;
//         secondLargest = firstLargest;
//         firstLargest = value;
//     }
//     else if(value > secondLargest && value < firstLargest){
//         thirdLargest = secondLargest;
//         secondLargest = value
//     }
//     else if(value > thirdLargest && value < secondLargest){
//         thirdLargest = value;
//     }
    
// }

// console.log("First largest is :",firstLargest);
// console.log("Second Largest is :",secondLargest);
// console.log("Third Largest is :",thirdLargest);

// let arr = [2,4,6,[8,10,12,14],16,18,[20,22]];

// //Convert a nested array into a single flat array. Example: [[1,2],[3,4],[5]] → [1,2,3,4,5].

// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     if(!Array.isArray(value)){
//         newArray[newArray.length] = value;
//     } else {
//         for(let j = 0; j < value.length; j++){
//             newArray[newArray.length] = value[j];
//         }
//     }
    
// }

// console.log(newArray);


// const arr = [2,4,[6,[8,10,[12,14,[16,18],20],22],24],28,30];

// let flatArray = [];

// function flattenManually(array) {
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i];

//         // If value is array → go deeper
//         if (Array.isArray(value)) {
//             flattenManually(value);  // recursion (manual loop inside)
//         } 
//         else {
//             // push value manually
//             flatArray[flatArray.length] = value;
//         }
//     }
// }

// flattenManually(arr);

// console.log(flatArray);

// 1. Find all pairs in an array whose sum is equal to a given number.
// Example:
//  arr = [2,4,5,7,8], target = 9
//  Output → (2,7), (4,5)

// const arr = [2,4,5,7,0,9,6,3]
// let target = 9;

// let pairedArray = [];

// for (let i = 0; i < arr.length; i++) {
    
//     let value = arr[i];

//     for (let j = i+1 ; j < arr.length; j++) {
        
//         if((value + arr[j]) === target){
//             let newPair = new Array(value,arr[j]);
//             pairedArray.push(newPair);
//         }
        
//     }
    
// }

// console.log(pairedArray);

// 2. Find the difference between the largest and smallest element.
// Example: [10,5,30,20] → 30 - 5 = 25

// let arr = [10,5,30,20,40]

// let largest = -Infinity;
// let smallest = +Infinity;

// for(let i = 0; i < arr.length ; i++ ){

//      let value = arr[i];

//      if(value > largest){
//         largest = value;
//      } else if(value < smallest){
//         smallest = value
//      }
// }

// console.log("Differance between largest and smallest is :",largest-smallest);


// let arr = [2,4,6,8,10,12,14,16,18,20]
// let sum = 0;

// //  3. Count how many elements are strictly greater than the array average.

// for (let index = 0; index < arr.length; index++) {
    
//     let value = arr[index];

//     sum += value;
// }

// let lengthOfArray = arr.length;
// let averageOfArray = sum/lengthOfArray;

// let count = 0;

// for(let j = 0; j < arr.length; j++){
//     let value = arr[j];

//     if(value > averageOfArray){
//         count ++;
//     }
// }

// console.log("Avg of array is :",averageOfArray);
// console.log("Number of element greater than avg",count);

// let arr = [2,4,6,2,3,6,8,10,8,12,14];

// // 4. Return a new array with only unique elements (order must stay same).

// let uniqueElem = [];

// for(let i = 0 ; i < arr.length; i++){

//     let value = arr[i];

//     if(!uniqueElem.includes(value)){
//         uniqueElem[uniqueElem.length] = value;
//     }
// }

// console.log(uniqueElem);

// let arr = [2,4,6,8,10];
// let brr = [2,4,6,8,10];

// //5. Check if two arrays are equal element-by-element (without .every()).

// function manualElementCompair (arr,brr) {
   
//     let isEqual = true;

//     if(arr.length !== brr.length){
//         isEqual = false;
//         return isEqual;
//     } else {
//         for(let i = 0 ; i< arr.length; i++){
//             if(arr[i] !== brr[i]){
//                 isEqual = false;
//                 break;
//             }
//         }
//         return isEqual;
//     }
// }

// const EqualOrNot = manualElementCompair(arr,brr);
// console.log("is these two array equal element :",EqualOrNot);

// let arr = [2,4,-1,-2,-3,-5,0,0,9,0,-10,-9];

// // 6. Count how many positive, negative, and zero values are in the array.

// let positiveInteger = 0;
// let negativeInteger = 0;
// let zeros = 0;

// for(let i = 0; i < arr.length; i++){

//     let value = arr[i];

//     if(value > 0){
//         positiveInteger ++;
//     } else if( value < 0 ){
//         negativeInteger ++;
//     } else {
//         zeros ++;
//     }
// }

// console.log("Positive Number count are :",positiveInteger);
// console.log("Negative Number count are :",negativeInteger);
// console.log("Total zeros in array are :",zeros);


// 7. Move all zeros to the end without using extra array.
//Example: [1,0,3,0,5] → [1,3,5,0,0]

// let arr = [0,1,1,0,2,0,0,0,4,5,6];

// let nonZeroIndex = 0;  // pointer to place next non-zero

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] !== 0) {
//         // swap arr[i] with arr[nonZeroIndex]
//         let temp = arr[nonZeroIndex];
//         arr[nonZeroIndex] = arr[i];
//         arr[i] = temp;

//         nonZeroIndex++;
//     }

// }

// console.log(arr);

