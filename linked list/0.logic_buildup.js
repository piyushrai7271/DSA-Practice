// basic understanding how linked list work and its sayntax

// class Node {
//     constructor(value){
//        this.value = value;
//        this.next = null;
//     }
// }

// let a = new Node(10);
// let b = new Node(20);
// let c = new Node(30);
// let d = new Node(40);
// a.next = b;
// b.next = c;
// c.next = d;

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//   insertAtHead(value){
//     const newNode =  new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//   }
//   traverse(){
//     let current = this.head;
//     while(current !== null){
//         console.log(current.value);
//         current = current.next;
//     }
//   }
// }

// let list = new LinkedList();
// list.insertAtHead(10);
// list.insertAtHead(20);
// list.traverse(); // 20 10


// create a node

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// creating linkedList 

// class linkedList {
//     constructor(){
//         this.head = null
//     }
// }

// // creating node and linking to each node
// let list = new linkedList();
// let node1 = new Node(10);
// let node2 = new Node(20);
// let node3 = new Node(30);

// list.head = node1;
// node1.next = node2;
// node2.next = node3;

// Implement insertAtTail(value)
// Rules:
// If list is empty → new node becomes head
// Otherwise → go to last node and attach {wrong solution done by me in first attempt }

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null; 
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//     }

//     insertAtTail(value){
//         if(this.head === null){
//             this.head = value;
//         }else{
//             let current = this.head;
//             while(current !== null){
//                 current = current.next;
//             }
//             let tailNode = new Node(value);
//             current = tailNode.next;
//         }
//     }
// }

// current fixed code
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//     }

//     insertAtTail(value){
//         const newNode = new Node(value);

//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }

//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }

//         current.next = newNode;
//     }
// }



