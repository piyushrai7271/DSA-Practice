// // here we will practice hashmap basic question

// let map = new Map();
// let arr = ["virat","sachine","dravid","dhoni","bumrah","rahul"];

// for(let i=0; i<arr.length; i++){
//     map.set(i, arr[i]);
// }

// console.log(map);

// printing only key
// for (const key of map.keys()) {
//     console.log(key);
// }

// printing only value
// for (const key of map.values()) {
//     console.log(key);
//     if(typeof key === "string") {
//         console.log(true);
//     }
// }

// printing both key and value
// for (const [key,value] of map) {
//     console.log(value);
//     console.log(key);
// }

// function countA (arr) {

//     let map = new Map();
//     for(let i=0; i<arr.length; i++){
//         let ch = arr[i];
//         if(map.has(ch)){
//             map.set(ch, (map.get(ch) + 1))
//         } else {
//             map.set(ch , 1);
//         }
//     }

//     let aCount = map.get("a");
//     return aCount;
// }

// console.log(countA(["a", "b", "a", "c", "a"]));


// function firstUnique(arr){
   
//     let map = new Map();
//     for(let i=0; i<arr.length; i++){
//         let ch = arr[i];
//         if(map.has(ch)){
//             map.set(ch, (map.get(ch) + 1))
//         } else {
//             map.set(ch, 1);
//         }
//     }

//     for(let i = 0; i < arr.length; i++){
//     if(map.get(arr[i]) === 1){
//         return arr[i];
//     }
//     }
//     return false;
// }

// console.log(firstUnique(["a", "b", "a", "c", "b", "d"]))



// function mostFrequent(arr){

//     let map = new Map();
//     for(let i=0; i<arr.length; i++){
//         let ch = arr[i];
//         if(map.has(ch)){
//             map.set(ch, (map.get(ch) + 1 ) )
//         } else {
//             map.set(ch, 1);
//         }
//     }

//     let mostfrequent = 0;
//     let resultKey = null;
//     for (const [key,value] of map) {
//         if(value > mostfrequent){
//             mostfrequent = value;
//             resultKey = key;
//         }
//     }
//     return resultKey;
// }

// console.log(mostFrequent(["a", "b", "a", "c", "a", "b"]));

// let map = new Map();
// let arr = ["a","b","c","a","b","d","e","f","g","h","a"];

// for(let i=0; i<arr.length; i++){
//     let ch = arr[i];
//     if(map.has(ch)){
//         map.set(ch, (map.get(ch) + 1));
//     } else {
//         map.set(ch,1);
//     }
// }

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(`${key} : ${value}`);
// }

// HashMap Practice Question 4
// Write a function:

// Input:
// [1, 2, 3, 1]

// function hasDuplicate(arr){

//     let map = new Map();

//     for(let i = 0; i < arr.length; i++){

//         let value = arr[i];

//         if(map.has(value)){
//             return true;
//         }

//         map.set(value, true);
//     }

//     return false;
// }