// basic linked list question

// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// function linkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // adding new item to last node or at tail node
// linkedList.prototype.addItem = function(value){
//     const newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else {
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// console.log(list);

// traversal of linked list
// function Node(value, next=null){
//     this.value = value;
//     this.next = next;
// }

// function linkedList(){
//     this.head = null;
//     this.length = 0
// }

// // adding new node to tail
// linkedList.prototype.addItem = function(value){
//     const newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else {
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = newNode;
//     }
//     this.length++;
// }

// // adding new node to head
// linkedList.prototype.insertAtHead = function (value){
//     let newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else{
//         let currentNode = this.head;
//         this.head = newNode;
//         newNode.next = currentNode;
//     }
//     this.length++;
// }

// // traversal of linked list
// linkedList.prototype.traversal = function(){
//     if(this.head === null){
//         console.log(null);
//     }else{
//         let currentNode = this.head;
//         while(currentNode !== null){
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }

// let list = new linkedList()
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// list.insertAtHead(5);
// list.traversal();


// 👉 DELETE OPERATIONs

//  Delete the head node

// function Node(value, next=null){
//     this.value = value;
//     this.next = next;
// }

// function linkedList(){
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
//         currentNode.next = newNode
//     }
//     this.length ++;
// }

// // for deleting head
// linkedList.prototype.deleteHead = function (){
//     let currentNode = this.head;
//     if(this.head === null){
//         console.log(null);
//     }else {
//         this.head = currentNode.next;
//         currentNode.next = null;
//     }
//     this.length--;
//     return currentNode.value; // returning value of deleted node
// }

// // for deleting tail
// linkedList.prototype.deleteTail = function(){
//     // Case 1: empty list
//     if (this.head === null) {
//         console.log(null);
//         return null;
//     }

//     // Case 2: only one node
//     if (this.head.next === null) {
//         let deletedValue = this.head.value;
//         this.head = null;
//         this.length--;
//         return deletedValue;
//     }

//     // Case 3: more than one node
//     let prev = null;
//     let current = this.head;

//     while (current.next !== null) {
//         prev = current;          // store previous
//         current = current.next;  // move forward
//     }

//     // now:
//     // current → last node
//     // prev → second last node

//     prev.next = null; // break link
//     this.length--;

//     return current.value; // deleted tail value
// }

// linkedList.prototype.traversal = function(){
//     if(this.head === null){
//         console.log(null);
//     }else{
//         let currentNode = this.head;
//         while(currentNode !== null){
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }



// let list = new linkedList()
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// list.deleteTail();
// // console.log("Deleted node value :",list.deleteHead())
// list.traversal();


