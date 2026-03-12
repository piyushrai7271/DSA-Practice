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


// NEW DAY.............
// create stack
// function Stack (){
//     this.items = [];
// }

// // push
// Stack.prototype.push = function (value){
//     this.items[this.items.length] = value;
//     return this.size();
// }

// // pop
// Stack.prototype.pop = function (){
//     if(this.isEmpty()) return null;

//     let removedElement = this.items[this.size()-1];
//     this.items.length = this.size()-1;
//     return removedElement;
// }

// // peek
// Stack.prototype.peek = function(){
//     if(this.isEmpty()) return null;

//     return this.items[this.size()-1];
// }

// // size
// Stack.prototype.size = function(){
//     return this.items.length;
// }

// // isEmpty
// Stack.prototype.isEmpty = function(){
//     return this.size() === 0;
// }

// // traverse
// Stack.prototype.traverse = function (){
//     if(this.isEmpty()){
//         console.log("Stack is empty");
//         return;
//     }

//     for(let i=this.size()-1; i>=0; i--){
//         console.log(this.items[i]);
//     }
// }


// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log("Last element :",stack.pop());
// console.log("Is stack Empty :",stack.isEmpty());
// console.log("Size of Stack :",stack.size());
// stack.traverse();

//New Day..........
// create new Stack
function Stack (){
    this.items = [];
}

// push......
Stack.prototype.push = function (value){
    this.items[this.items.length] = value;
    return this.items.length;
}
// pop ......
Stack.prototype.pop = function (){
    if(this.items.length === 0) return null;

    let removedItem = this.items[this.items.length-1];
    this.items.length = this.items.length-1;
    return removedItem;
}
// peek ......
Stack.prototype.peek = function (){
    if(this.items.length === 0) return null;

    let lastElem = this.items[this.items.length-1];
    return lastElem;
}
// travers ........
Stack.prototype.travers = function (){
    if(this.items.length === 0) return null;

    let arr = this.items;
    for(let i= arr.length-1; i>=0 ; i--){
        console.log(arr[i]);
    }
}


let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log("Last element removed :",stack.pop());
console.log("Last peek of stack :",stack.peek());
stack.travers()
