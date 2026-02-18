// Array based stack question and basic stack question

// stack define
// function Stack() {
//   this.items = [];
//   this.length = 0;
// }

// Stack.prototype.push = function (value) {
//   this.items[this.items.length] = value;
//   this.length++;
// };

// Stack.prototype.pop = function () {
//   if (this.items.length === 0) return null;

//   const removed = this.items[this.items.length - 1];
//   this.items.length = this.items.length - 1;
//   this.length--;
//   return removed;
// };

// Stack.prototype.peek = function () {
//   if (this.items.length === 0) return null;
//   return this.items[this.items.length - 1];
// };

// Stack.prototype.size = function () {
//   return this.length;
// };

// Stack.prototype.isEmpty = function () {
//   return this.items.length === 0;
// };

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());  // 30
// console.log(stack.peek()); // 20

// linked list with stack

// create node
// function Node (value, next = null){
//     this.value = value;
//     this.next = next;
// }

// // create linkedList
// function linkedList (){
//     this.head = null;
//     this.length = 0;
// }

// // push for stack
// linkedList.prototype.push = function (value){
//     let newNode = new Node(value);
//     if(this.head === null){
//         this.head = newNode;
//     }else{
//         let currentNode = this.head;
//         let nextNode = newNode
//     }
// }

// let list = new linkedList();
// list.push(value);
// list.pop();

// New Day...........

// function Stack() {
//   this.items = [];
// }

// Stack.prototype.push = function (elem) {
//   return (this.items[this.items.length] = elem);
// };

// Stack.prototype.pop = function () {
//   if (this.isEmpty()) {
//     return "Stack is Empty.";
//   }

//   return this.items.pop();
// };

// Stack.prototype.peek = function () {
//   if (this.isEmpty()) {
//     return "Stack is Empty";
//   }

//   return this.items[this.size() - 1];
// };

// Stack.prototype.isEmpty = function () {
//   return this.size() === 0;
// };

// Stack.prototype.size = function () {
//   return this.items.length;
// };

// Stack.prototype.travers = function(){
//     if(this.isEmpty()){
//         console.log("Stack is Empty ");
//         return;
//     }

//     for(let i=0; i < this.items.length ; i++){
//         console.log(this.items[i]);
//     }
// }

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log("Last Element :",stack.pop());
// console.log("Is stack Empty :",stack.isEmpty());
// console.log("Last element :",stack.peek());
// console.log("Size of the stack :",stack.size());
// stack.travers();

// new Day................

// create stack
// function Stack (){
//   this.items = [];
// }


// Stack.prototype.push = function(value){
//   return this.items[this.items.length] = value;
// }
// Stack.prototype.pop = function (){
//   if(this.isEmpty()){
//     return "Stack is empty"
//   }
//   return this.items[this.items.length -1] ;
// }
// Stack.prototype.peek = function (){}
// Stack.prototype.isEmpty = function(){
//   return this.size() === 0;
// }
// Stack.prototype.size = function (){
//   return this.items.length;
// }
// Stack.prototype.travers = function (){}

// New Day...........

// create stack
function Stack (){
    this.items = [];
}

// Push element at last index of array
Stack.prototype.push = function (value){
   this.items[this.items.length] = value
}

// pop meanse take out last element of stack
Stack.prototype.pop = function (){
    if(this.items.length === null) return null;

    return this.items[this.items.length-1];
}

// check array is empty
Stack.prototype.isEmpty = function (){
    return this.size() === 0;
}

// check size
Stack.prototype.size = function (){
    return this.items.length;
}

// peek 
Stack.prototype.peek = function (){}

// travers the array
Stack.prototype.travers = function (){
    if(this.items.length === null) return null;
    for(let i=0; i<this.items.length; i++){
        console.log(this.items[i]);
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
let lastElement = stack.pop();
console.log("Last element of stack is :",lastElement);
stack.isEmpty();
stack.peek();
stack.size();
stack.travers()