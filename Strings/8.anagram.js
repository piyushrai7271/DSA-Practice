// Anagram Challenge
// Valid Anagram Ignore Case and Spaces
// Return true if two strings are anagrams after:
// Ignoring spaces
// Ignoring uppercase/lowercase differences
// Example
// "Listen"
// "Silent"

// Output:
// true


function isAnagram (str1, str2) {
    if(typeof str1 !== "string" || typeof str2 !== "string") return false;

    // converts both string to small case 
    let str1S = str1.toLowerCase();
    let str2S = str2.toLowerCase();

    let clean1 = "";
    let clean2 = "";
    // remove empty space from both string
    for(let i=0; i<str1S.length; i++){
        if(str1S[i] !== " "){
            clean1 += str1S[i];
        }
    }

    for(let i=0; i<str2S.length; i++){
        if(str2S[i] !== " "){
            clean2 += str2S[i];
        }
    }

    // check both string length if length not equal return false
    if(clean1.length !== clean2.length) return false;

    // store str1 value count in object 
    let myObject = {} ;

    for(let i=0; i<clean1.length; i++){
        let value = clean1[i];
        if(myObject[value]){
            myObject[value]++;
        }else {
            myObject[value] = 1;
        }
    }
    // reduce count of every value and if it is not there return false else reduce count --;
    for(let i=0; i<clean2.length; i++){
        let value = clean2[i];
        if(!myObject[value]){
            return false;
        } else {
            myObject[value]--;
        }
    }

    return true;
}

console.log(isAnagram("Dormitory", "Dirty Room"));
