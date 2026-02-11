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
function Node (value, next = null){
    this.value = value;
    this.next = next;
}

// create linkedList
function linkedList (){
    this.head = null;
    this.length = 0;
}

// push for stack
linkedList.prototype.push = function (value){
    let newNode = new Node(value);
    if(this.head === null){
        this.head = newNode;
    }else{
        let currentNode = this.head;
        let nextNode = newNode
    }
}


let list = new linkedList();
list.push(value);
list.pop();
