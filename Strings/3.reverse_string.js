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


