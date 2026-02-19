// basic stack question

// create stack
// function Stack (){
//     this.items = [];
// }

// // push 
// Stack.prototype.push = function(value){
//     this.items[this.items.length] = value;
// }

// // pop
// Stack.prototype.pop = function(){
//     if(this.items.length === 0) return null;

//     const removed = this.items[this.items.length - 1];
//     this.items.length = this.items.length - 1;
//     return removed;
// }

// // size
// Stack.prototype.size = function (){
//     return this.items.length;
// }

// // isEmpty
// Stack.prototype.isEmpty = function (){
//     return this.items.length === 0;
// }

// // traverse
// Stack.prototype.traverse = function (){
//     for(let i = this.items.length - 1; i >= 0; i--){
//         console.log(this.items[i]);
//     }
// }


// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log("Last poped element :",stack.pop());
// console.log("Size of stack :",stack.size());
// console.log("Is Stack Empty :",stack.isEmpty());
// stack.travers()