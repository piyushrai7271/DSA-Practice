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





