// mixed question of linked list

// // create node
// function Node (value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // create linkedList
// function linkedList (){
//     this.head = null;
//     this.length = 0;
// }

// // add new Node
// linkedList.prototype.addItem = function (value){
//    let newNode = new Node(value);
//    if(this.head === null){
//     this.head = newNode;
//    }else{
//     let currentNode = this.head;
//     while(currentNode.next !== null){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
//    }
//    this.length++;
// }

// // delete node by value
// linkedList.prototype.deleteNodeByValue = function (value){
//     if(this.head === null) return null;

//     // handle head
//     if(this.head.value === value){
//         this.head = this.head.next;
//         this.length--;
//         return;
//     }

//     let prev = null;
//     let currentNode = this.head;
//     while(currentNode !== null && currentNode.value !== value){
//         prev = currentNode;
//         currentNode = currentNode.next;
//     }

//     if(currentNode === null) return null;

//     prev.next = currentNode.next;

//     this.length--;
// }

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

// // find second last Node 
// linkedList.prototype.findSecondLastNode = function () {
//     if (this.head === null || this.head.next === null) {
//         return null;
//     }

//     let prev = null;
//     let currentNode = this.head;

//     while (currentNode.next !== null) {
//         prev = currentNode;
//         currentNode = currentNode.next;
//     }

//     return prev.value;
// };

// // insert before value
// linkedList.prototype.insertBeforeValue = function (existingValue, newValue){
//     if(this.head === null) return null;

//     let newNode = new Node(newValue);
//     // if existing value at head
//     if(this.head.value === existingValue){
//         let nextNode = this.head;
//         this.head = newNode;
//         newNode.next = nextNode;
//         this.length++;
//         return;
//     }

//     let prev = null;
//     let currentNode = this.head;
//     while(currentNode !== null && currentNode.value !== existingValue){
//         prev = currentNode;
//         currentNode = currentNode.next;
//     }

//     if(currentNode === null) return null;
//     prev.next = newNode;
//     newNode.next = currentNode;
//     this.length++;
// }



// // Traverse the linked list
// linkedList.prototype.travers = function (value){
//    if(this.head === null){
//     return null;
//    }else{
//     let currentNode = this.head;
//     while(currentNode !== null){
//         console.log(currentNode.value);
//         currentNode = currentNode.next;
//     }
//    }
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
// // Delete node by value
// // list.deleteNodeByValue(70);
// // Insert after value
// // list.insertAfterValue(60,70)
// // Find 2nd last node
// // console.log("Second last Node value :",list.findSecondLastNode());
// // Insert before value
// // list.insertBeforeValue(existingValue, newValue)

// list.travers();




// NEW DAY...................................

// // create new node
// function Node(value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // Create linkedList
// function linkedList (){
//     this.head = null;
//     this.length = 0;
// }

// linkedList.prototype.addItem = function (value){
//     let newNode = new Node(value);
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

// linkedList.prototype.travese = function (){
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
// // simple technique for findingNthFromEnd
// linkedList.prototype.findNthFromEnd = function (n) {
//     if (this.head === null || n > this.length) {
//         return null;
//     }

//     let index = 0;
//     let currentNode = this.head;

//     while (index < (this.length - n)) {
//         currentNode = currentNode.next;
//         index++;
//     }

//     return currentNode.value;
// }

// // Two pointer technique for finding nth from last
// linkedList.prototype.findNthFromEnd = function (n) {
//     if (this.head === null) return null;

//     let a = this.head;
//     let b = this.head;

//     // move pointer b n steps ahead
//     for (let i = 0; i < n; i++) {  // very Important this is how we move pointer on node
//         if (b === null) return null; // n > length
//         b = b.next;
//     }

//     // move both pointers together
//     while (b !== null) {
//         a = a.next;
//         b = b.next;
//     }

//     return a.value;
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
// console.log("Answer is :",list.findNthFromEnd(3));
// list.travese()