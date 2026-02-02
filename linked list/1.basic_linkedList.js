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


// perform addItem , deleteAtHead, deleadAttail, insertAtHead, insertAttail

// fn for creating node
// function Node(value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // fn for creating linked list
// function linkedList(){
//     this.head = null;
//     this.length = 0;
// }

// // adding new node to last 
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
//     this.length ++;
// }

// // traverse the node
// linkedList.prototype.traversNode = function(){
//     if(this.head === null){
//         console.log(null);
//         return null;
//     }else{
//         let currentNode = this.head;
//         while(currentNode !== null){
//             console.log(currentNode.value);
//             currentNode = currentNode.next;
//         }
//     }
// }

// // insert new node at head
// linkedList.prototype.insertAtHead = function (value){
//     let newNode = new Node (value);
//     if(this.head === null){
//         this.head = newNode;
//     }else{
//         let currentNode = this.head;
//         this.head = newNode;
//         newNode.next = currentNode;
//     }
//     this.length++;
// }

// // delete head of linklist node
// linkedList.prototype.deleteHead = function (){
//     if(this.head === null){
//         return null;
//     }else{
//         let currentNode = this.head;
//         this.head = currentNode.next;
//         currentNode = null;
//     }
//     this.length--;
// }

// // delete tail of the linked list node
// linkedList.prototype.deleteTail = function (){
//     if(this.head === null ){
//         return null;
//     } else if (this.head.next === null) {
//         let deletedValue = this.head.value;
//         this.head = null;
//         this.length--;
//         return deletedValue;
//     }else{
//         let preNode = null;
//         let currentNode = this.head;
//         while(currentNode.next !== null){
//             preNode = currentNode;
//             currentNode = currentNode.next;
//         }

//         preNode.next = null;
//         this.length--;
//         return currentNode.value;
//     }
// }


// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.insertAtHead(0);
// console.log("Last node deleted value :",list.deleteTail());
// list.deleteHead();
// list.traversNode();


// These are the implements i want to perform:
// 1- traverse throw node
// 2- addItem in linked list last node
// 3- addItem on head node
// 4- addItem at given index
// 5- delete head item node
// 6- delete tail item node
// 7- delete At given index
// 8- update At given index
// 9- update head node index
// 10- update tail node

// // create node 
// function Node(value, next=null){
//     this.value = value;
//     this.next = next; 
// }

// // create linkedList
// function linkedList(){
//     this.head = null;
//     this.length = 0;
// }

// // 2-addItem in linked list last node
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

// // 3- addItem on head node
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

// // 4- addItem at given index
// linkedList.prototype.addAtIndex = function (index, value) {

//     if (index < 0 || index > this.length) return null;

//     const newNode = new Node(value);

//     // insert at head
//     if (index === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return;
//     }

//     let count = 0;
//     let current = this.head;
//     let prev = null;

//     while (count < index) {
//         prev = current;
//         current = current.next;
//         count++;
//     }

//     prev.next = newNode;
//     newNode.next = current;
//     this.length++;
// };

// // 5- delete head item node
// linkedList.prototype.deleteHead = function (){
//     if (this.head === null) return null;

//     this.head = this.head.next;
//     this.length--;
// }

// // 6- delete tail item node
// linkedList.prototype.deleteTail = function () {
//     if (this.head === null) return null;

//     // single node case
//     if (this.head.next === null) {
//         this.head = null;
//         this.length--;
//         return;
//     }

//     let currentNode = this.head;
//     let prevNode = null;

//     while (currentNode.next !== null) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//     }

//     prevNode.next = null;
//     this.length--;
// };

// // 7- Delete at index
// linkedList.prototype.deleteAtIndex = function (index) {
//     if (typeof index !== "number") return null;
//     if (index < 0 || index >= this.length) return null;

//     if (index === 0) {
//         this.head = this.head.next;
//         this.length--;
//         return;
//     }

//     let currentNode = this.head;
//     let prevNode = null;
//     let count = 0;

//     while (count < index) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//         count++;
//     }

//     prevNode.next = currentNode.next;
//     this.length--;
// };

// // 8-update head node index
// linkedList.prototype.updateHeadValue = function (value){
//     if(this.head === null) return null;

//     this.head.value = value;
// }

// // 9-update tail node
// linkedList.prototype.updateTailValue = function (value){
//   if(this.head === null) return null;

//   let currentNode = this.head;
//   while(currentNode.next !== null){
//     currentNode = currentNode.next;
//   }
//   currentNode.value = value;
// }

// // 10- update At given index
// linkedList.prototype.updateAtIndex = function (index,value){
//     // out of range
//     if (index < 0 || index >= this.length) return null;

//     // update at head
//     if (index === 0) {
//         this.head.value = value;
//         return;
//     }

//     let currentNode = this.head;
//     let count = 0;

//     // reach the node at given index
//     while (count < index) {
//         currentNode = currentNode.next;
//         count++;
//     }

//     //  update to given index
//     currentNode.value = value;
// }

// // 1- traverse the linked list
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
// // list.insertAtHead(0);
// // list.addAtIndex(3,25)
// // list.deleteHead();
// // list.deleteTail();
// // list.deleteAtIndex(3);
// // list.updateHeadValue(11);
// // list.updateTailValue(41);
// list.updateAtIndex(2,22);
// list.traverse();

