// two pointer question

//Reverse an array in place using two pointers.

// let arr=[1, 2, 3, 4, 5];

// for(let i=0,j=arr.length-1; i<j; i++,j--){
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i]=temp;
// }
// console.log(arr);

// check a string is pelindrom or not

// let str = "racecar"
// let isPelindrom = true;

// function checkPelindrom (str,isPelindrom) {
//    for(let i=0,j=str.length-1; i<j ; i++,j--){
//        if(str[i] !== str[j]){
//          isPelindrom=false;
//          break;
//        }
//    }
//    return isPelindrom;
// }
// console.log(checkPelindrom(str,isPelindrom));

// Given a sorted array, find two numbers such that their sum is equal to a given target.
//Return the indices of those two numbers.


// let arr = [1, 2, 3, 4, 6, 8, 9]
// let target = 10

// function findtargetedSumIndexes (arr,target){
//     for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j] === target){
//             return [i,j];
//         }
//     }
//  }
// }
// console.log(findtargetedSumIndexes(arr,target));
// // this apporach takes O(n*n)
 
// // vs

// function anotherLogic (arr,target){
//     let i=0;
//     let j= arr.length-1;
//     while(i<j){
//         if(arr[i]+arr[j] < target){
//             i++;
//         }else if(arr[i]+arr[j]>target){
//             j--;
//         }else{
//             return [i,j];
//         }
//     }
// }
// console.log(anotherLogic(arr,target));
// //time complexity order(n)

// Remove duplicates from a sorted array in place and return the new length.

// let arr = [1,1,2,2,3,4,4,5]
// let duplicateElement=[];

// let i=j-1;
// let j=1;
// while(j<arr.length-1){
//     if(arr[i] === arr[j]){
//          duplicateElement.push(arr[j]);
//          j++;
//     }
// }

// Remove duplicate element from array without using extra array,object, and don't sort the array

// let arr=[1,9,7,1,5,4,7,9];

// let length = arr.length;

