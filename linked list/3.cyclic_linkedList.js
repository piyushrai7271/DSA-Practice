// HERE WE WILL LEARN CYCLIC LINKED LIST AND ITS QUESTION ON THIS PATTERN

// creating cyclic linked list

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
//     }else{
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// // Traverse node
// linkedList.prototype.traverse = function (){
//     if(this.head === null){
//         return null;
//     }else{
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
// list.addItem(60);
// list.addItem(70);

// // create cycle: last node → node with value 20
// let first = list.head;           // 10
// let second = first.next;         // 20
// let current = list.head;

// while (current.next !== null) {
//     current = current.next;
// }

// // current is last node (50)
// current.next = second;

// list.traverse()

// NEW day......

// // create node....
// function Node(value, next=null){
//     this.value = value;
//     this.next = next;
// }

// // create linked list......
// function linkedList(){
//     this.head = null;
//     this.length = 0;
// }

// // Add Item
// linkedList.prototype.addItem = function(value){
//     let newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else{
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// // search the element
// linkedList.prototype.search = function(elem){
//   if(this.head === null){
//       return null;
//   }else{
//     let currentNode = this.head;
//     while(currentNode !== null){
//         if(currentNode.value === elem){
//             return true;
//         }
//         currentNode = currentNode.next;
//     }
//   }
//   return false;
// }

// // Delete node by value
// linkedList.prototype.deleteNodeByValue = function (elem) {
//   if (this.head === null) return null;

//   // delete head case
//   if (this.head.value === elem) {
//     this.head = this.head.next;
//     this.length--;
//     return;
//   }

//   let prevNode = null;
//   let currentNode = this.head;

//   while (currentNode !== null && currentNode.value !== elem) {
//     prevNode = currentNode;
//     currentNode = currentNode.next;
//   }

//   // value not found
//   if (currentNode === null) return null;

//   prevNode.next = currentNode.next;
//   this.length--;
// };

// // Insert after value
// linkedList.prototype.insertAfterValue = function (existingValue, newValue) {
//     if (this.head === null) return null;

//     let newNode = new Node(newValue);
//     let currentNode = this.head;

//     while (currentNode !== null && currentNode.value !== existingValue) {
//         currentNode = currentNode.next;
//     }

//     if (currentNode === null) return null; // value not found

//     let nextNode = currentNode.next;
//     currentNode.next = newNode;
//     newNode.next = nextNode;

//     this.length++;
// };

// //Traverse the linked list
// linkedList.prototype.traverse = function(){
//   if(this.head === null){
//       return null;
//   }else{
//     let currentNode = this.head;
//     while(currentNode !== null){
//         console.log(currentNode.value);
//         currentNode = currentNode.next;
//     }
//   }
// }


// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// list.addItem(60);
// list.addItem(70);
// list.addItem(80);
// list.addItem(90);
// list.addItem(100);
// list.insertAfterValue(50, 55)
// // list.deleteNodeByValue(90);
// // console.log("Is element exist in list :",list.search(1));
// list.traverse()

// // creating node
// function Node (value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // create linkedList
// function linkedList (){
//     this.head = null;
//     this.length = 0;
// }

// linkedList.prototype.addItem = function (value){
//     let newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else{
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// // checking that is linked list is cyclic
// linkedList.prototype.hasCycle = function(){
//     if(this.head === null || this.head.next === null){
//         return false;
//     }

//     let slow = this.head;
//     let fast = this.head;
//     while(fast !== null && fast !== slow){
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     if(fast === null) return false;

//     if(fast === slow) return true;
// }

// // find cyclic start
// linkedList.prototype.findCycleStart = function () {
//     if (this.head === null) return null;

//     let slow = this.head;
//     let fast = this.head;

//     // Step 1: detect cycle
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             // Step 2: find cycle start
//             let pointer1 = this.head;
//             let pointer2 = slow;

//             while (pointer1 !== pointer2) {
//                 pointer1 = pointer1.next;
//                 pointer2 = pointer2.next;
//             }

//             return pointer1.value; // cycle start
//         }
//     }

//     return null; // no cycle
// };


// //travers the node
// linkedList.prototype.traverse = function (){
//     if(this.head === null){
//         return null;
//     }else{
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
// list.addItem(60);
// list.addItem(70);
// list.addItem(80);
// list.addItem(90);
// list.addItem(100);
// // list.hasCycle();
// list.findCycleStart()
// list.traverse()
