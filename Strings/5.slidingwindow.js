// 🧠 Next Pattern Question
// (String + Sliding Window)

// Find maximum number of vowels
// in any substring of size k.

// 🔍 Example
// Input:
// str = "abciiidef"
// k = 3

// Output:
// 3

// function maxVowel(str, k) {

//     if (typeof str !== "string" || str.length === 0 || k < 1) {
//         return null;
//     }

//     const vowels = new Set([
//         "a", "e", "i", "o", "u",
//         "A", "E", "I", "O", "U"
//     ]);

//     let currentVowel = 0;

//     // first window
//     for (let i = 0; i < k; i++) {
//         if (vowels.has(str[i])) {
//             currentVowel++;
//         }
//     }

//     let maxVowel = currentVowel;

//     // sliding window
//     for (let i = k; i < str.length; i++) {

//         // remove left character
//         if (vowels.has(str[i - k])) {
//             currentVowel--;
//         }

//         // add new right character
//         if (vowels.has(str[i])) {
//             currentVowel++;
//         }

//         // track maximum
//         if (currentVowel > maxVowel) {
//             maxVowel = currentVowel;
//         }
//     }

//     return maxVowel;
// }

// console.log(maxVowel("abciiidef", 3));