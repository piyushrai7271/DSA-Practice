// reverse string and return the reversed word of string
// example "javascript"

// const reverseWord = (str) =>{
//     if(str.length === 0) return null;
   
//     let Word = "";
//     for(let i=0; i<str.length; i++){
//        Word = str[i] + Word;
//     }
//     return Word;
// }

// console.log(reverseWord('javaScript'));


// Check if a string is palindrome.

// 🔍 Example 1
// Input:
// "madam"

// Output:
// true

// function isPalindrom (str) {
//   if(str.length === 0) return null ;

//   let isPalim = true;
//   for(let i=0,j=str.length-1; i<j ; i++,j--){
//     if(str[i] !== str[j]){
//         isPalim = false;
//         break;
//     }
//   }
//   return isPalim;
// }

// console.log(isPalindrom("madam"));

// 🧠 Next Question (Very Important)
// Reverse only vowels in a string.
// 🔍 Example
// Input:
// "javascript"

// Output:
// "jivascrapt"

// function reverseVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     const arr = str.split('');
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         if (!vowels.has(arr[left])) {
//             left++;
//         } else if (!vowels.has(arr[right])) {
//             right--;
//         } else {
//             // Swap the vowels
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//     return arr.join('');
// }

// console.log(reverseVowels("javascript")); // Output: "jivascrapt"


// 🧠 String Reverse Question
// Reverse only the words
// whose length is greater than 4.

// 🔍 Example
// Input:
// "i love javascript coding"

// Output:
// "i evol tpircsavaj gnidoc"
// 🔍 Explanation
// "love"       → unchanged (length 4)
// "javascript" → reversed
// "coding"     → reversed


// 🧠 Next Question
// Remove the character that appears immediately after #.
// Example 1
// Input:
// "ab#cd"

// Output:
// "abcd"

// function removeElement (str) {
//     if(str.length === 0) return null;

//     let uniqueStr = "";
//     for(let i=0; i<str.length; i++){
//         if(str[i-1] !== "#"){
//             uniqueStr += str[i];
//         }
//     }

//     return uniqueStr;
// }


// console.log(removeElement("ab#cd"))

// Reverse Pattern - Question 1
// Reverse String
// Given a string, return its reverse.
// Example
// Input:
// "javascript"

// Output:
// "tpircsavaj"

// function reverseWord (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let reverseStr = "";
//     for(let i=str.length-1; i>=0 ; i--){
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
// }


// console.log(reverseWord("javascript"))

// // second method ...
// function reverseWord (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let reverse = "";
//     for(let i=0; i<str.length; i++){
//         reverse = str[i] + reverse;
//     }
//     return reverse;
// }


// console.log(reverseWord("javascript"))


// Next Question: Reverse Words
// Reverse the order of words in a sentence.
// Example
// Input:
// "i love javascript"
// Output:
// "javascript love i"

// function reverseSentance (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let sentance = str.split(" ");
//     let reversSentance = [];
//     for(let i=sentance.length-1; i>=0; i--){
//        reversSentance.push(sentance[i]);
//     }
//     return reversSentance.join(" ");
// }


// console.log(reverseSentance("i love javascript"))

// Next Question: Reverse Each Word
// Reverse every word, but keep the word order the same.

// Example
// Input:
// "i love javascript"

// Output:
// "i evol tpircsavaj"

// function reverseSentance (sentance) {
//     if(typeof sentance !== "string" || sentance.length === 0) return null;

//     let wordArr = sentance.split(" ");
//     let reverseArr = [];
//     for(let i=0; i<wordArr.length; i++){
//         let reverseWord = "";
//         for (let j = wordArr[i].length - 1; j >= 0; j--) {
//             reverseWord += wordArr[i][j];
//         }
//         reverseArr.push(reverseWord);
//     }
//     return reverseArr.join(" ");
// }


// console.log(reverseSentance("i love javascript"));

// Reverse Vowels
// Reverse only the vowels in a string.
// All other characters should remain in their original positions.
// Example 1
// Input:
// "hello"
// Output:
// "holle"

// function reverseVowel (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

    
//     let arr = str.split("");
    
    
//     let vowels = new Set(["a","e","i","o","u","A", "E" , "I", "O", "U"]);
    
//     let i = 0;
//     let j = arr.length - 1;
    
//     while(i < j){
//         if(!vowels.has(arr[i])){
//             i++;
//         } else if(!vowels.has(arr[j])){
//             j--;
//         } else {
//             // 3. Swap elements in the array
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp; 
//             i++; 
//             j--;
//         }
//     }
    
//     return arr.join("");
// }

// console.log(reverseVowel("hello"));

// Question
// Reverse only the words whose length is greater than 3.
// Example
// Input:
// "i love javascript"

// Output:
// "i evol tpircsavaj"

// function reverseSentance (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let sentanceArr = str.split(" ");
//     let reverseArr = [];
    
//     for(let i=0; i<sentanceArr.length; i++){
//         let word = sentanceArr[i];
        
//         if(word.length > 3){
//             let reverseWord = "";
//             for(let j=word.length-1; j>=0; j--){
//                reverseWord += word[j];
//             }
//             reverseArr.push(reverseWord);
//         } else {
//             reverseArr.push(word); 
//         }
//     }
//     return reverseArr.join(" ");
// }

// console.log(reverseSentance("my name is piyush")); 


// Revision Question 1 — Reverse String
// Given a string, return the reversed string.

// Example
// Input:
// "backend"
// Output:
// "dnekcab"

// function reverse (str){
//     if(typeof str !== "string" || str.length === 0) return null;

//     let reverseStr = "";
//     for(let i=str.length-1; i>=0;  i--){
//        reverseStr += str[i];
//     }
//     return reverseStr;
// }

// console.log(reverse("dnekcab"))

// Revision Question 2 — Reverse Words
// Reverse the order of words, but do not reverse the words themselves.

// Example
// Input:
// "i love backend"
// Output:
// "backend love i"

// function reverseSentance (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let arrSentance = str.split(" ");
//     let reverseArray = [];
//     for(let i=arrSentance.length-1; i>=0; i--){
//         reverseArray.push(arrSentance[i]);
//     }

//     return reverseArray.join(" ");
// }

// console.log(reverseSentance("i love backend"))

// Reverse every word, but keep the word order unchanged.

// Example
// Input:
// "i love backend"
// Output:
// "i evol dnekcab"

// function reverseWord (str) {
//     if(typeof str !== "string" || str.length === 0) return null;

//     let strArr = str.split(" ");
//     let reverseSentance = [];
//     for(let i=0; i<strArr.length; i++){

//         let word = strArr[i];
//         let wordStr = "";
//         for(let j=word.length-1; j>=0; j--){
//             wordStr += word[j];
//         }
//         reverseSentance.push(wordStr);
//     }
//     return reverseSentance.join(" ");
// }


// console.log(reverseWord("i love backend"))
