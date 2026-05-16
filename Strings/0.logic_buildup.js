//1. Count characters in a string

// let count = 'hellow';
// let strCount = 0
// for(let i = 0; i< count.length ; i++){
//      strCount ++;
// }

// console.log(strCount);

// // Access each character one-by-one (without method)

// let greet = "welcome";

// for(let i=0; i < greet.length ; i++){
//      console.log(greet[i]);
// }

// //3. Count vowels (a, e, i, o, u)

// let word = "how are you";

// let vowelCount = 0;

// for(let i=0 ; i < word.length ; i++){
//      if(word[i] === "a" || word[i] === "e" || word[i]=== "i" || word[i] === "o" || word[i] === "u" ){
//         vowelCount ++;
//      }
// }

// console.log("Total vowels are :",vowelCount);

//4. Convert string to uppercase manually

// Convert string to uppercase manually

// let str = "hello world";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     let code = str.charCodeAt(i);

//     // Check if character is lowercase (a-z)
//     if (code >= 97 && code <= 122) {
//         // convert to uppercase by subtracting 32
//         result += String.fromCharCode(code - 32);
//     } else {
//         // keep same character
//         result += str[i];
//     }
// }

// console.log(result);
// let str = "hellow";
// console.log(String.fromCharCode(100));
// console.log(str.charCodeAt(1))

// //4. Convert string to uppercase manually

// let str = "hellow world";
// let result = "";


// for(let i = 0; i < str.length ; i++){
   
//      let code = str.charCodeAt(i);

//      if(code >= 97 && code <= 122){

//           result += String.fromCharCode(code -32)
//      } else {
//           result += str[i]
//      }
// }

// console.log(result);

// // 5. Convert string to lowercase manually

// let str = "HELLOW WORLD";
// let result = ""

// for(let i=0 ; i < str.length; i++){

//      let code = str.charCodeAt(i);

//      if(code >= 65 && code <= 90){
//           result += String.fromCharCode(code + 32);
//      } else{
//           result += str[i];
//      }
// }

// console.log(result);

//6. Reverse a string manually

// let str = "hsuyip"
// let reverse = "";

// for(let i = str.length -1; i >=0 ; i--){
//      reverse = reverse + str[i];
// }
// console.log(reverse);

//7. Check if two strings are equal (character by character)

// let str1 = "hellow";
// let str2 = "helloW";


// let isEqual = true;

// if(str1.length !== str2.length){
//      isEqual = false;
// } else {
//      for(let i= 0; i< str1.length; i++){
//           if(str1[i].toLowerCase() !== str2[i].toLowerCase()){
//                isEqual = false;
//                break;
//           }
//      }
// }

// if(isEqual){
//      console.log("Both string are equal");
// } else {
//      console.log("Both string are not equal");
// }

// // 8. Count spaces in a string

// let str = "how  are you today"
// let count = 0;

// for(let i = 0; i<str.length ; i++){
//      if(str[i] === " "){
//           count ++;
//      }
// }
// console.log("total number of space is :",count);

// // 9. Remove spaces manually

// let str = "a b c d";
// let str2 = ""

// for(let i=0; i< str.length ; i++){

//      if(str[i] !== " "){
//           str2 = str2+str[i];
//      }
// }

// console.log(str2);

// //10. Replace a character manually
// // Input: "apple", replace p with q → "aqple"

// let str = "apple";
// let result ="";

// for(let i=0; i < str.length ; i++ ){

//      if(str[i] === "p"){
//           result += "q";
//      } else {
//           result += str[i];
//      }
// }
// console.log(result);


// 11. Check if a string is palindrome
// Input: "level" → True

// let str = "level";

// let isPelendron = true;


// for(let i=0,  j = str.length -1; i<=j; i++,j--){

//     if(str[i] !== str[j]){
//         isPelendron = false;
//     }
// }

// if(isPelendron){
//     console.log("its pelendrom");
// } else {
//     console.log("Its not pelendrom");
// }

// 12. Count frequency of each character
// Input: "aabbcc" → {a:2, b:2, c:2}

// let str = "aabbcc";

// let newObjact = {};

// for(let i = 0; i < str.length ; i++){

//     let value = str[i];
//     if(newObjact[value]){
//         newObjact[value]++
//     }else {
//         newObjact[value] = 1
//     }
// }

// console.log(newObjact);

// 13. Find first non-repeating character
// Input: "aabbcddee" → Output: c

// let str="aabbcddee";
// let newObj={};

// for(let i=0; i<str.length ; i++){
    
//     let value = str[i];

//     if(newObj[value]){
//         newObj[value]++;
//     }else{
//         newObj[value] = 1;
//     }
// }

// let ans = null;

// for(let j=0; j<str.length; j++){
//     let rvalue = str[j];
//     if(newObj[rvalue] === 1){
//         ans = rvalue;
//         break;
//     }
// }

// console.log(ans);

// 14. Find first repeating character
// Input: "abca" → Output: a

// let str="abca";

// let newObj = {};

// for(let i=0; i<str.length; i++){ 
//     let value = str[i];
//     if(newObj[value]){
//         newObj[value]++;
//     }else {
//         newObj[value] = 1;
//     }
// }

// let ans = null;

// for(let j=0; j< str.length ; j++){
    
//     let value = str[j];

//     if(newObj[value] > 1){
//         ans = value;
//         break;
//     }
// }

// console.log(ans)

// // 15. Remove duplicate characters from string
// // Input: "banana" → "ban"

// let str = "banana";
// let uniqueStr = [];

// for(let i= 0; i<str.length; i++){

//     let value = str[i];
//     if(!uniqueStr.includes(value)){
//         uniqueStr[uniqueStr.length] = value;
//     }
// }

// console.log(uniqueStr.toString());

// let str = "banana";
// let seen = {};
// let result = "";

// for (let char of str) {
//     if (!seen[char]) {
//         seen[char] = true;
//         result += char;
//     }
// }

// console.log(result); // ban

// 16. Check if two strings are anagram
// Input: "listen" & "silent"

// let str = "listen";
// let str1 = "silent";

// let newObject = {};

// for(let i = 0; i< str.length ; i++){

//     let value = str[i];
//     if(newObject[value]){
//         newObject[value]++;
//     } else{
//      newObject[value] = 1;
//     }
// }
// for(let j=0; j<str1.length ; j++){

//     let val = str1[j];


// }


// find first non-repeting character

// let str = "aabbcddeeff";
// let myObject = {}

// for(let i=0; i<str.length ; i++){

//     let value = str[i];
//     if(myObject[value]){
//         myObject[value]++;
//     } else {
//         myObject[value] = 1;
//     }
// }

// let ans = null;

// if(myObject[value])

// for in loop for looping through object
// let myObject = {
//     "1":"Anjali",
//     "2":"Atul",
//     "3":"amit",
//     "4":"Ajay",
//     "5":"Abhisekh",
//     "6":"Aryan"
// }

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`)
    
// }

//....................................................
// 13. Find first non-repeating character
//Input: "aabbcddee" → Output: c

// let str = "aabbcddee";
// let myObject = {};

// for(let i=0; i<str.length ; i++){

//     let value = str[i];

//     if(myObject[value]){
//         myObject[value]++;
//     } else{
//         myObject[value] = 1;
//     }
// }

// let ans = null;

// for (const key in myObject) {
    
//     if(myObject[key] <= 1){
//         ans=key
//     }
// }

// console.log(ans);

//14. Find first repeating character
//Input: "abca" → Output: a

// let str = "abcc";
// let obj = {};
// let ans = null;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (obj[ch]) {
//         ans = ch;
//         break; // FIRST repeating found
//     } else {
//         obj[ch] = 1;
//     }
// }

// console.log(ans);

// 16. Check if two strings are anagram
// Input: "listen" & "silent"

// let str1 = "listen";
// let str2 = "silens";
// let myObject = {};

// let isAnargem = true;

// if(str1.length !== str2.length){
//     isAnargem = false;
// } else{
//     for(let i=0; i<str1.length;i++){

//         let value = str1[i];
//         if(myObject[value]){
//             myObject[value]++;
//         } else{
//             myObject[value]=1;
//         }
//     }
// }

// for(let i = 0; i<str2.length ; i++){

//     let value = str2[i];

//     if(!myObject[value]){
//         isAnargem = false;
//         break;
//     } else{
//         myObject[value]--;
//         if (myObject[value] < 0) {
//                 isAnargem = false;
//                 break;
//             }
//     }
// }

// if(isAnargem){
//     console.log("Both string are anargem");
// }else {
//     console.log("Both string are not anargam")
// }

//18. Count words (cannot use split)
// Input: "I am learning JS" → 3 words

// let str = "I am learning js";
// let count =0;
// for(let i=0; i<str.length; i++){

//     if(str[i] === " "){
//         count++;
//     }
// }
// console.log("Total no of word is :",count);


// new day .................................................
//18. Count words (cannot use split)
// Input: "I am learning JS" → 3 words

// let str = "I am learning js";
// let count = 0;

// for(let i=0; i < str.length ; i++){
//     if(str[i] !== " " && (i === 0 || str[i-1]=== " ")){
//         count++;
//     }
// }
// console.log(count);

// 19. Extract numbers from a string
// Input: "a1b2c3" → 123

// let str = "a1b2c3";
// let str1 = "";

// for(let i=0; i<str.length; i++){
    
//     const charcodeValue = str.charCodeAt(i);
//     if(charcodeValue >= 48 && charcodeValue <= 57){
//         str1 = str1 + str[i];
//     }
// }
// console.log(str1);

// 20. Find longest word in a sentence
// Input: "I love programming" → programming

// let str = "I love programming";

// let maxLength = 0;
// let currentLength = 0;
// let endIndex = 0;

// for (let i = 0; i <= str.length; i++) {

//     if (str[i] !== " " && i !== str.length) {
//         currentLength++;
//     } else {
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//             endIndex = i;
//         }
//         currentLength = 0;
//     }
// }

// // extract longest word manually
// let result = "";
// for (let i = endIndex - maxLength; i < endIndex; i++) {
//     result += str[i];
// }

// console.log(result); // programming

// 27. Count uppercase and lowercase letters
// Input: "HeLLo" → Upper: 3, Lower: 2

// New day ............................................

// 4. Convert string to uppercase manually
// Do it without .toUpperCase() (ASCII logic).

// let str = "abcdEf";
// let str1 = "";

// for(let i=0; i<str.length ; i++){

//     let code = str.charCodeAt(i);
//     if(code >= 97 && code <= 122){
//         let smallLetter = code-32
//         let ch = String.fromCharCode(smallLetter);
//         str1 = str1 + ch;
//     } else {
//         str1 = str1 + str[i];
//     }
// }
// console.log(str1);

// 4. Convert string to lowerCase manually


// let str = "ABCDe";
// let str1 = "";

// for(let i=0; i<str.length ; i++){

//     let code = str.charCodeAt(i);
//     if(code >= 65 && code <= 90){
//         let smallesLetter = code + 32;
//         let ch = String.fromCharCode(smallesLetter);
//         str1 = str1 + ch;
//     }else {
//         str1 = str1 + str[i];
//     }
// }
// console.log(str1);

// convert a string lowerCase to upperCase and vise versa

// let str = "aBcDeFgH";
// let str1 = "";

// for(let i=0; i<str.length ; i++){

//     let code = str.charCodeAt(i);
//     if(code >= 65 && code <= 90){
//          let smallesLetter = code + 32;
//          let ch = String.fromCharCode(smallesLetter);
//          str1 = str1 + ch;
//     } else if(code >= 97 && code <= 122){
//          let capitalLetter = code - 32;
//          let ch = String.fromCharCode(capitalLetter);
//          str1 += ch;
//     } else{
//         str1 = str1 + str[i];
//     }
// }
// console.log(str1);

// 27. Count uppercase and lowercase letters
//Input: "HeLLo" → Upper: 3, Lower: 2

// let str = "HeLLo";
// let upperCase = 0;
// let lowerCase = 0;

// for(let i=0; i<str.length ; i++){

//     let code = str.charCodeAt(i);
//     if(code >= 65 && code <= 90){
//         upperCase++;
//     } else if(code >=97 && code <= 122){
//         lowerCase++
//     }
// }
// console.log(`LowerCase are : ${lowerCase} , upperCase are : ${upperCase}`);


// 25. Find the most frequent character
// Input: "aabbbcdddde" → d

// let str = "aabbbcdddde";
// let myObject = {};
// let heighestfreCount = 0;
// let maxChar = null;

// for(let i = 0; i<str.length ; i++){
    
//     let value = str[i];
//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }


// for (const key in myObject) {
//      if(myObject[key] > heighestfreCount ){
//         heighestfreCount = myObject[key];
//         maxChar = key;
//      }
// }
// console.log(maxChar);

// 24. Compress a string (run length encoding)
//  Input: "aaabbc" → "a3b2c1"

// let str = "aaabbc";
// let str1 = ""
// let myObject = {};

// for(let i=0; i<str.length ; i++){

//     let value = str[i];

//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }
// for (const key in myObject) {
//     str1 = str1 + key;
//     str1 = str1 + myObject[key];
// }

// console.log(str1);

// //23. Check if string contains only alphabets

// let str = "aaBcDkms";
// let isOnlyalphabate = true;

// for(let i=0; i<str.length ; i++){
    
//     let code = str.charCodeAt(i);
//     if(!(code >= 65 && code <= 90 || code >= 97 && code <= 122)){
//         isOnlyalphabate = false
//     }
// }

// console.log(isOnlyalphabate);

// 22. Check if string contains only digits
// Input: "12345" → True

// let str = "12345a"
// let isDigit = true;

// for(let i=0; i<str.length; i++){

//     let code = str.charCodeAt(i);
//     if(!(code >= 48 && code <= 57)){
//         isDigit = false
//     }
// }
// console.log(isDigit);

// 21. Capitalize first letter of every word
// Input: "hello world" → "Hello World"

// let str = "hello world";
// let str1 = "";

// for(let i=0; i<str.length ; i++){

//     if( i === 0 || str[i-1] === " "){
        
//           let code = str.charCodeAt(i);
//           let capitalLetter = code - 32;
//           let ch = String.fromCharCode(capitalLetter);
//           str1 = str1 + ch;
//     }else {
//         str1 = str1 + str[i];
//     }
// }
// console.log(str1);


//New day ..........................................

// 14. Find first repeating character
//Input: "abca" → Output: a

// let str = "abca"
// let myObject = {};


// for(let i=0; i<str.length; i++){

//     let value = str[i];
//     if(myObject[value]){
//         myObject[value]++;
//     } else{
//         myObject[value] = 1;
//     }
// }
// let ans = null;
// for (const key in myObject) {
    
//     if(myObject[key] > 1){
//         ans = key;
//         break;
//     }

// }
// console.log("First repeting key is :",ans);

//31. Remove all special characters manually
// Input: "a!b@c#1" → "abc1"

// let str = "a!b@c#1";
// let str1 = "";

// for(let i = 0; i<str.length; i++){

//     let code = str.charCodeAt(i);
//     if(code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122){
//         str1 = str1 + str[i];
//     } 
// }
// console.log(str1);

// 16. Check if two strings are anagram
// Input: "listen" & "silent"

// let str1 = "listen";
// let str2 = "silent";
// let isAnargem = true;
// let myObject = {};

// if(str1.length !== str2.length){
//     isAnargem = false;
// } else {

//     for(let i=0 ; i<str1.length ; i++){

//         let value = str1[i];
//         if(myObject[value]){
//             myObject[value]++;
//         } else {
//             myObject[value] = 1;
//         }
//     }

//     for(let j=0; j<str2.length ; j++){

//         let val = str2[j];
//         if(myObject[val]){
//             myObject[val]--;
 //              if (myObject[value] < 0) {
//                 isAnargem = false;
//                 break;
//             }
//         } else {
//             isAnargem = false;
//             break;
//         }
//     }
// }

// if(isAnargem){
//     console.log("Its an anargem");
// }else {
//     console.log("Its not anargem")
// }

// 17. Convert string to number manually (no Number())
// Input: "1234" → 1234
// (Use ASCII subtraction logic.)

// let str="1234";

// for(let i=0; i<str.length ; i++){

//     let code = str.charCodeAt(i);
//     let result = code - 48;
//     console.log(result)
// }

// 18. Count words (cannot use split)
// Input: "I am learning JS" → 3 words

// let str = "I am learning JS";
// let wordCount = 0;

// for(let i=0; i<str.length ; i++){

//    if(str[i] === " " && i === 0 || str[i-1] === " "){
//     wordCount++;
//    }
// }
// console.log(wordCount)

// NEW DAY .................................................

// find the total word in the string
// input : "I love programing"

// let str = "I love programing";
// let wordCount = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
//         wordCount++;
//     }
// }

// console.log(wordCount);


// let str = "I love programing";
// let wordCount = 0;

// for(let i=0; i<str.length; i++){

//     if(i === 0 && str[i] === " " || str[i-1] === " "){
//         wordCount++;
//     }
// }
// console.log(wordCount);

// 28. Reverse each word in a sentence
// input : "hello world" -> "olleh dlrow"

// let str = "hello world";
// let newStr = "";
// let initial_index = 0;


// for(let i=0; i <= str.length ; i++){

//     if(str[i] === " " || i === str.length){

//         for(let j= i-1; j>=initial_index; j--){
//             newStr += str[j];
//         }

//         if(i !== str.length){
//             newStr += " ";
//         }
        
//         initial_index = i + 1;
//     }
// }
// console.log(newStr)

// improved code 

// let str = "hello world computer";
// let result = "";
// let word = "";

// for (let i = 0; i <= str.length; i++) {

//     if (str[i] !== " " && i !== str.length) {
//         // build word in reverse
//         word = str[i] + word;
//     } else {
//         // word ended
//         result += word;
//         if (i !== str.length) result += " ";
//         word = "";
//     }
// }

// console.log(result);

// let str = "hellow";
// let newStr = "";
// let rStr = "";

// for(let i=0 ; i<str.length; i++){
//      rStr = str[i] + rStr;
//      newStr = newStr + str[i];
// }
// console.log(rStr);
// console.log(newStr);

//29. Find smallest and largest word
//Input: "I love my India" →
//Smallest: I
//Largest: India

// let str = "I love my India";
// let lergest = "";
// let currentLength = 0;

// for(let i=0; i<str.length ; i++){

// }

// new day ....................................................

//28. Reverse each word in a sentence
//Input: "hello world" → "olleh dlrow"

// let str = "hellow computer world";
// let result = "";
// let word = "";

// for(let i=0; i<=str.length ; i++){

//     if(str[i] !== " " && i !== str.length){
//         word = str[i] + word;
//     } else {
//         result += word;
//         if(i !== str.length){
//             result = result + " ";
//         }
//         word = "";
//     }
// }

// console.log(result);

// Test ....

// Find the second largest number in an array.

// let arr = [10, 5, 20, 8, 25, 15];

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;

// for(let i=0; i<arr.length; i++){

//     let value = arr[i];

//    if(value > firstLargest){
//      secondLargest = firstLargest;
//      firstLargest = value;
//    } else if(value > secondLargest && value < firstLargest){
//       secondLargest = value
//    }
// }
// console.log(secondLargest);


//Find the first character that appears exactly once.
// let str = "aabbcddbe";

// let str = "aabbcdde"
// let myObject = {};

// for(let i=0; i<str.length ; i++){

//     let value = str[i];

//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }

// let result = "";
// for(let i = 0; i < str.length; i++){
//     if(myObject[str[i]] === 1){
//         result = str[i];
//         break;
//     }
// }

// console.log("First unique :",result);

// NEW DAY..............................................................

//5. Check if two arrays are equal element-by-element (without .every()).

// let arr = [1,3,5,7,9,11];
// let arr1 = [1,3,5,7,9,11];
// let isEqual = true;


// if(arr.length !== arr1.length){
//    isEqual = false;
// } else {
//     for(let i=0; i<arr.length ; i++){
//          if(arr[i] !== arr1[i]){
//             isEqual = false;
//             break;
//          }
//     }
// }
// if(isEqual){
//     console.log("Both array are equal ")
// } else{
//     console.log("Both array are not equal")
// }

//  6. Count how many positive, negative, and zero values are in the array.

// let arr = [1,2,3,0,-9,-2,-4,0,1];
// let negativeInteger = 0;
// let positiveInteger = 0;
// let zerosAre = 0;

// for(let i=0; i<arr.length ; i++){

//     let value = arr[i];
//     if(value < 0){
//         negativeInteger++;
//     } else if( value === 0){
//         zerosAre++;
//     } else if( value > 0){
//         positiveInteger++;
//     }
// }
// console.log(`NegativeInteger : ${negativeInteger}, PositiveInteger are : ${positiveInteger}, ZeroInteger are : ${zerosAre}`)

//7. Move all zeros to the end without using extra array.
//Example: [1,0,3,0,5] → [1,3,5,0,0]

// let arr = [1,2,0,3,0,0,4,9,0,0,0,11];
// let nonZeroIndex = 0;

// for(let i=0; i<arr.length; i++){

//     if(arr[i] !== 0){
//         let temp = arr[nonZeroIndex];
//         arr[nonZeroIndex] = arr[i];
//         arr[i] = temp;

//         nonZeroIndex++;
//     }
// }
// console.log(arr);

// // move all zero element to begning of array
// // input : [2,3,4,5,0,4,0,0]-> [0,0,0,2,3,4,5,4]

// let arr=[2,3,4,5,0,4,0,0];
// let nonZeroIndex = arr.length -1;

// for(let i= arr.length - 1; i >=0; i--){

//     if(arr[i] !== 0){
//         let temp = arr[nonZeroIndex];
//         arr[nonZeroIndex] = arr[i];
//         arr[i] = temp;

//         nonZeroIndex--;
//     }
// }
// console.log(arr);



// 9. Find the frequency of each number but show only duplicates.
//Example → “4 appears 3 times”, etc.

// let arr = [1,1,2,3,4,5,5,5,6,6,7,8,9,10,10];
// let myObject = {};

// for(let i = 0; i<arr.length; i++){

//     let value = arr[i];
//     if(myObject[value]){
//         myObject[value]++;
//     } else {
//         myObject[value] = 1;
//     }
// }

// for (const key in myObject) {
    
//     if(myObject[key] > 1){
//         console.log(`${key} appears ${myObject[key]} no of time .`);
//     }
// }

// 10. Find the element that appears the maximum number of times.

// let arr = [1,3,4,5,6,5,7,1,1,1,1,5,5,5];
// let myObject = {};
// let element = null;

// let maxAppear = 0;

// for(let i=0; i<arr.length; i++){
    
//     let value = arr[i];

//     if(myObject[value]){
//         myObject[value]++;
//     }else{
//         myObject[value] = 1;
//     }
// }
// console.log(myObject);

// for (const key in myObject) {
//     if(myObject[key] > maxAppear){
//         maxAppear = myObject[key];
//         element = key;
//     }

// }
// console.log("The element which appear max time is :",element);

// 8. Count how many numbers are prime in an array.
// input : [1,2,3,5,7,9,10] -> 4

// let arr = [1,2,3,5,7,9,10];



// count how many integer are prime number in given array:
// let arr = [1, 2, 3, 4, 5, 6, 7, 11, 15, 17];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   let isPrime = true;

//   if (num <= 1) {
//     isPrime = false;
//   }

//   for (let j = 2; j < num; j++) {
//     if (num % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     count++;
//   }
// }

// console.log(count); // 6


// NEW FILE...........
// reverse the array
// let arr = [2,4,6,8,10,12,14,16,18,20];

// for(let i = arr.length -1 ; i >= 0 ; i--){

//     console.log(arr[i]);
// }

// count how many time each element appear in array

// let arr = [2,3,4,1,2,2,2,1,5,6,4,10,10,12,14,16,18,18,16,20];

// let myObject = {};


// for(let i = 0; i < arr.length ; i++){

//     let value = arr[i];

//     if(myObject[value]){// this condition is importeant
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }

// console.log(myObject);

// merge two array into new array

// let arr = [2,4,6,8,10];
// let brr = [1,3,5,7,9];
// let crr = [];

// let index = 0;

// for(let i = 0; i < arr.length ; i++){
//    crr[index] = arr[i];
//    index++;
// }

// for(let j = 0 ; j < brr.length; j++){
//     crr[index]= brr[j];
//     index ++;
// }
// console.log(crr);

// let arr = [2,4,1,0,9,8,7,19,11,13,15,17,2,20,];



// let firstLargest = -Infinity;
// let secondLargest  = -Infinity;
// let thirdLarjest = -Infinity;

// for(let i = 0 ; i< arr.length ; i++){

//     let value = arr[i];

//     if(value > firstLargest){
//         thirdLarjest = secondLargest;
//         secondLargest = firstLargest;
//         firstLargest = value;
//     }
//     else if ( value > secondLargest && value < firstLargest){
//         thirdLarjest = secondLargest;
//         secondLargest = value;
//     }

//     else if(value > thirdLarjest){
//         thirdLarjest = value;
//     }
// }

// console.log(`firstLargest is : ${firstLargest} , secondLargest is : ${secondLargest}, thirdLargest is : ${thirdLarjest}`);

// let arr = [2,4,5,6,7,8,10,3];

// // check if array is shorted in assending

// let isAssending = true;

// for(let i = 0; i < arr.length-1 ; i++){

//     if(arr[i] > arr[i+1]){
//         isAssending = false;
//         break;
//     }
// }

// console.log(isAssending);

// let arr = [1,2,3,4,5];

// // Rotate array rigth 1 step 
// // Example [1,2,3,4,5] ---> [5,1,2,3,4]

// let lastElement = arr[arr.length-1];

// for(let i = arr.length -2 ; i >= 0 ; i--){
//      arr[i+1] = arr[i];
// }

// arr[0] = lastElement;
// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,10];

// let firstElement = arr[0];

// for(let i = 0 ; i < arr.length -1 ; i++){
//     arr[i] = arr[i+1];
// }

// arr[arr.length -1] = firstElement

// console.log(arr);

// setInterval(() => {
//     let first = arr[0];

//     // shift everything left
//     for(let i = 0; i < arr.length - 1; i++){
//         arr[i] = arr[i+1];
//     }

//     arr[arr.length - 1] = first;

//     console.log(arr);
// }, 5000); // rotates every 1 second

// let arr = [2,4,[6,8,[10],12,14],16,18,20];

// let arr = [2,4,[6,8,12,14],16,18,20];

// let flatArray = [];

// for(let i = 0; i < arr.length ; i++ ){
     
//     let value = arr[i];

//     if(!Array.isArray(value)){
//         flatArray[flatArray.length] = value;
//     } else {
//         for(let j = 0; j< value.length; j++){
//              flatArray[flatArray.length] = value[j];
//         }
//     }
// }

// console.log(flatArray);

// let arr = [2,4,[6,8,[10,11],12,14],16,18,20];

// // same problem to solve nested array

// let flatedValue = [];

// function flatNestedArray (arr) {

    
//     for(let i = 0 ; i < arr.length; i++){

//         let value = arr[i]
        
//         if(!Array.isArray(value)){
//             flatedValue[flatedValue.length] = value;
//         } else{
//             flatNestedArray(value);
//         }

//     }

//     return flatedValue;

// }

// let flatedArray = flatNestedArray(arr);
// console.log(flatedArray);

// let arr = [1,8,9,0,3,6,4,7,2];

// // find all the pair in array whose sum is 9
// let target = 9;

// let pairedValue = [];

// for(let i =0; i<arr.length;i++){

//     let value = arr[i];

//     for(let j = i+1 ; j < arr.length ; j++){
//         if((value + arr[j]) === target){
//            pairedValue[pairedValue.length] = [value,arr[j]];
//         }
//     }
// }

// console.log(pairedValue);


// let arr = [2,4,6,8,10];
// let brr = [2,4,6,8,10];


// let isEquale = true;

// if(arr.length !== brr.length){
//     isEquale =false;
// } else {
//     for(let i = 0; i < arr.length ; i++){

//         if(arr[i] !== brr[i]){
//             isEquale = false;
//             break;
//         }
//     }
// }

// if(isEquale){
//     console.log("arrays are equal")
// } else{
//     console.log("Arrays are not equal ");
// }

// NEW DAY.................................

//  8. Count how many numbers are prime in an array.
// [1,2,3,4,5,6,7,11,13,15,17,19,23,25]

// let arr = [1,2,3,4,5,6,7,11,13,15,17,19,23,25];

// let count = 0;

// for(let i=0; i<arr.length; i++){

//     let value = arr[i];
//     let isPrime = true;

//     if(value <= 1){
//         isPrime = false;
//         continue;
//     }else{
//         for(let j= 2; j*j<=value; j++){ // optimized code
//             if(value % j === 0){
//                 isPrime=false;
//                 break;
//             }
//         }
//     }
//     if(isPrime){
//         count++
//     }
// }
// console.log(count);

// 10. Find the element that appears the maximum number of times.
// input : [1,2,3,1,5,6,3,3,3,9];

// let arr = [1,2,3,1,5,6,3,3,3,9];
// let myObject = {};

// for(let i=0; i<arr.length; i++){

//     let value = arr[i];
//     if(myObject[value]){
//         myObject[value]++;
//     }else {
//         myObject[value] = 1;
//     }
// }

// let result = 0;
// let elem = null;

// for (const key in myObject) {
//     if(myObject[key] > result){
//         result = myObject[key];
//         elem = key;
//     }
// }
// console.log("Result :",result +" "+ "key :",elem);

// 11. Print all elements that occur only once (unique elements).
// input :[1,2,3,1,2,4,5,6,7,5,6,7,10];

// let arr = [1,2,3,1,2,4,5,6,7,5,6,7,10];
// let uniqueArray = [];
// let myObject = {};

// for(let i=0; i<arr.length; i++){
//     let value = arr[i];
//     if(myObject[value]){
//         myObject[value]++;
//     } else{
//         myObject[value]=1;
//     }
// }

// for (const key in myObject) {
//     if(myObject[key] === 1){
//         uniqueArray[uniqueArray.length] = key
//     }
// }
// console.log(uniqueArray);

//14. Find missing numbers from 1 to n.
//Input: [1,2,4,6] → Missing: [3,5]

// let arr  = [1,2,4,6]
// let missingElement = [];

// for(let i=0; i<arr.length; i++){
//     let currentValue = arr[i];
//     let previousValue = currentValue-1;
    

//     if(!(currentValue-previousValue === 1)){
//         missingElement[missingElement.length] = previousValue + 1;
//     }
// }
// console.log(missingElement)

// let number = 123;
// let digit = number % 10
// let snumber = (number - digit) / 10

// console.log(digit)
// console.log(snumber);


