// linked list question

// // create node
// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // add new item in node
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

// // insert at head
// linkedList.prototype.insertAtHead = function (value) {
//   let newNode = new Node(value);

//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let currentNode = this.head;
//     this.head = newNode;
//     newNode.next = currentNode;
//   }
//   this.length++;
// };

// // deleadAttail function
// linkedList.prototype.deleadAttail = function (){
//     if(this.head === null) {
//         return null
//     }else if( this.head.next === null){
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

// // delete at head of linkedList node
// linkedList.prototype.deleteAtHead = function (){
//     if(this.head === null){
//         return null;
//     }else{
//         let  currentNode = this.head;
//         this.head = currentNode.next;
//         currentNode = null;
//     }
//     this.length--;
// }

// // travers with node
// linkedList.prototype.travers = function () {
//   if (this.head === null) return null;

//   let currentNode = this.head;
//   while (currentNode !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.next;
//   }
// };

// let list = new linkedList();
// list.addItem(5);
// list.addItem(10);
// list.addItem(15);
// list.addItem(20);
// list.addItem(25);
// list.insertAtHead(0);
// list.deleteAtHead();
// console.log("Deleted Last node :",list.deleadAttail());
// list.travers();

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

// NEW DAY ............................

// create Node
// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// }

// // create linked list
// function linkedList() {
//   this.head = null;
//   this.length = 0;
// }

// // add new Item
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

// // add item at head
// linkedList.prototype.addItemAtHead = function (value) {
//   let newNode = new Node(value);

//   if (this.head === null) {
//     this.head = newNode;
//   } else {
//     let nextNode = this.head.next;
//     this.head = newNode;
//     newNode.next = nextNode;
//   }
//   this.length++;
// };

// //add item at given index
// linkedList.prototype.addItemAtIndex = function (value, index) {
//   if (index < 0 || index > this.length) return null;

//   const newNode = new Node(value);

//   // insert at head
//   if (index === 0) {
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return;
//   }

//   let count = 0;
//   let current = this.head;
//   let prev = null;

//   while (count < index) {
//     prev = current;
//     current = current.next;
//     count++;
//   }

//   prev.next = newNode;
//   newNode.next = current;
//   this.length++;
// };

// //delete item at head
// linkedList.prototype.deleteHeadItem = function () {
//   let currentNode = this.head;
//   if (this.head === null) {
//     console.log(null);
//   } else {
//     this.head = currentNode.next;
//     currentNode.next = null;
//   }
//   this.length--;
//   return currentNode.value;
// };

// // delete tail item
// linkedList.prototype.deleteTailItem = function () {};

// // delete at given index
// linkedList.prototype.deleteAtGivenIndex = function (index) {};

// // update at given index
// linkedList.prototype.updateAtGivenIndex = function (index) {};

// // update at head item
// linkedList.prototype.updateHeadItem = function () {};

// // update at tail item
// linkedList.prototype.updateTailItem = function () {};

// // travers the linked list item
// linkedList.prototype.travers = function () {
//   if (this.head === null) return null;

//   let currentNode = this.head;
//   while (currentNode !== null) {
//     console.log(currentNode.value);
//     currentNode = currentNode.next;
//   }
// };

// let list = new linkedList();
// list.addItem(10);
// list.addItem(20);
// list.addItem(30);
// list.addItem(40);
// list.addItem(50);
// list.addItemAtHead(0);
// list.addItemAtIndex(25, 2);
// console.log("Deleted Node is :", list.deleteHeadItem());
// // list.deleteTailItem();
// // list.deleteAtGivenIndex();
// // list.updateAtGivenIndex();
// // list.updateHeadItem();
// // list.updateTailItem();
// list.travers();

// NEW DAY.................
//create node
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

// create linked list
function linkedList() {
  this.head = null;
  this.length = 0;
}

// add new node
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

// add new node at head
linkedList.prototype.addItemAtHead = function (value) {
  let newNode = new Node(value);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let currentNode = this.head;
    this.head = newNode;
    newNode.next = currentNode;
  }
  this.length++;
};

// add new node at given index
linkedList.prototype.addItemAtIndex = function (value, index) {
  if (index < 0 || index > this.length) return null;

  let newNode = new Node(value);

  // insert at head
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  let count = 0;
  let current = this.head;
  let prevNode = null;
  while(count < index){
    prevNode = current;
    current = current.next;
    count++;
  }
  prevNode.next = newNode;
  newNode.next = current;
  this.length++;
};

// delete at head node
linkedList.prototype.deleteHeadItem = function (){
  if(this.head === null) return null;

  let currentNode = this.head;
  this.head = currentNode.next
  currentNode.next = null;
  this.length --;
  return currentNode.value;
}

// delete tail node
linkedList.prototype.deleteTailItem = function (){
  // case 1: empty list
  if(this.head === null){
    return null;
  }
  // case 2: only one node
  if(this.head.next === null){
    let deleteValue = this.head.value;
    this.head = null;
    this.length--;
    return deleteValue;
  }
  // case 3: more than one node
  let prevNode = null;
  let currentNode = this.head;
  while(currentNode.next !== null){
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  prevNode.next = null;
  this.length--;
  return currentNode.value;
}


// travers the linked list
linkedList.prototype.travers = function () {
  if (this.head === null) return null;

  let currentNode = this.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

let list = new linkedList();
list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItem(50);
list.addItemAtHead(0);
list.addItemAtIndex(15,2);
console.log("Deleted Node is :", list.deleteHeadItem());
console.log("Deleted tail Node :",list.deleteTailItem());
list.travers();
