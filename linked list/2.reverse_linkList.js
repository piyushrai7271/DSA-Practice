// concept and question on reversing linked list

//// create node
// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList() {
//   this.head = null;
//   this.length = 0;
// }

// linkedList.prototype.addItem = function (value) {
//   let newNode = new Node(value);
//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }
//   this.length++;
// };

// // traverse linked list
// linkedList.prototype.traverse = function () {
//   if (this.head === null) {
//     return null;
//   } else {
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// };

// // reverse the linked list
// linkedList.prototype.reverse = function () {
//     // empty list or single node
//     if (this.head === null || this.head.next === null) {
//         return;
//     }

//     let prev = null;
//     let current = this.head;

//     while (current !== null) {
//         let nextNode = current.next; // 1️⃣ save next
//         current.next = prev;         // 2️⃣ reverse link
//         prev = current;              // 3️⃣ move prev forward
//         current = nextNode;          // 4️⃣ move current forward
//     }

//     // update head
//     this.head = prev;
// };

// // creating the linked list
// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// list.reverse();
// list.traverse();

// New day......

// // create node
// function Node(value,next=null){
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList (){
//   this.head = null;
//   this.length = 0;
// }

// // Add node with item
// linkedList.prototype.addItem = function (value){
//   let newNode = new Node(value);
//   if(this.head === null){
//     this.head = newNode;
//   }else{
//     let currentNode = this.head;
//     while(currentNode.next !== null){
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }
//   this.length++;
// }

// // Reverse the linked list
// linkedList.prototype.reverse = function (){
//   // handle null node or single node
//   if(this.head === null || this.head.next === null){
//     return;
//   }

//   let prev = null;
//   let current = this.head;
//   while(current !== null){
//     let nextNode = current.next; // this veriable holds 2nd node address
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }
//   this.head = prev;
// };

// // traverse the linked list
// linkedList.prototype.travers = function (){
//   if(this.head === null){
//     return null;
//   }else {
//     let currentNode = this.head;
//     while(currentNode !== null){
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// }

// let list = new linkedList()
// list.addItem(10)
// list.addItem(20)
// list.addItem(30)
// list.addItem(40)
// list.addItem(50)
// list.reverse();
// list.travers();

// // create node
// function Node(value, next=null){
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList (){
//   this.head = null;
//   this.length = 0;
// }

// linkedList.prototype.addItem = function (value){
//   let newNode = new Node(value);
//   if(this.head === null){
//     this.head = newNode;
//   }else{
//     let currentNode = this.head;
//     while(currentNode.next !== null){
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }
//   this.length++;
// }

// // Travers the linked list
// linkedList.prototype.travers = function (){
//   if(this.head === null){
//     return null;
//   }else{
//     let currentNode = this.head;
//     while(currentNode !== null){
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// }

// //

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
// list.travers();

// // Create Node
// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // Add new node with value
// linkedList.prototype.addItem = function (value) {
//   let newNode = new Node(value);
//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//   }
//   this.length++;
// };

// // Reverse the linked list
// linkedList.prototype.reverse = function (){
//   if(this.head === null || this.head.next === null){
//     return;
//   }

//   let prev = null;
//   let currentNode = this.head;
//   while(currentNode !== null){
//     let nextNode = currentNode.next;
//     currentNode.next = prev;
//     prev = currentNode;
//     currentNode = nextNode;
//   }
//   this.head = prev;
// }

// // Traverse the node
// linkedList.prototype.traverse = function () {
//   if (this.head === null) {
//     return null;
//   } else {
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// };

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
// list.reverse()
// list.traverse();


// Create new Node
function Node(value, next = null ){
  this.value = value;
  this.next = next;
}

// create linked list
function linkedList (){
  this.head = null;
  this.length = 0;
}

// Add Item
linkedList.prototype.addItem = function (value) {
  let newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.length++;
};

// Find middle node
linkedList.prototype.findMiddle = function (){
  if(this.head === 0 ){
     return null;
  }
}

// Traverse the node
linkedList.prototype.traverse = function () {
  if (this.head === null) {
    return null;
  } else {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
};



let list = new linkedList();
list.addItem(10)
list.addItem(20)
list.addItem(30)
list.addItem(40)
list.addItem(50)
list.addItem(60)
list.addItem(70)
list.addItem(80)
list.addItem(90)
list.addItem(100)
list.findMiddle();
list.traverse()
