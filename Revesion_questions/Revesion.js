// here we will practice and revise the array topic question

//Move all 0s to the end while maintaining order of non-zero elements.
//[0,1,0,3,12] → [1,3,12,0,0]

// let arr = [0,1,0,3,12];
// let nonZeroIndex = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== 0){
//         let temp = arr[nonZeroIndex];
//         arr[nonZeroIndex] = arr[i];
//         arr[i] = temp;

//         nonZeroIndex++
//     }
// }
// console.log(arr);


// Valid Palindrome
//Check if a string is palindrome (ignore spaces and case).

//"RaceCar" → true
//"hello" → false
// let str = "racecar"

// function isPalindrom (str){
   
//     for(let i=0 , j= str.length-1 ; i<j; i++,j--){
//         if(str[i] !== str[j]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log("Is palindrom :",isPalindrom(str));

//Find middle of linked list
//You already learned this — now solve again from scratch.

// // create node 
// function Node (value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // create linked list
// function linkedList (){
//     this.head = null;
//     this.length = 0;
// }

// // Add new node 
// linkedList.prototype.addItem = function (value){
//     let newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     } else{
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// // find middle node
// linkedList.prototype.findMiddleNode = function (){
//    // check if linked list is empty 
//    if(this.head === null){
//       return null;
//    }

//    let slow = this.head;
//    let fast = this.head;
//    while(fast !== null && fast.next !== null){
//     slow = slow.next;
//     fast = fast.next.next;
//    }
//    return slow;
// }

// // travers
// linkedList.prototype.travers = function (){
//     if(this.head === null){
//         return null;
//     }else {
//         let currentNode = this.head;
//         while(currentNode !== null){
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }

// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// console.log("Middle node is :",list.findMiddleNode());
// list.travers()

//Move all 0s to the front while maintaining order of non-zero elements.
//[0,1,0,3,12] → [0,0,1,3,12]

// let arr = [0,1,0,3,12];
// let zeroIndex = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] === 0){
//         let temp = arr[zeroIndex];
//         arr[zeroIndex] = arr[i];
//         arr[i] = temp;

//         zeroIndex++
//     }
// }
// console.log(arr);