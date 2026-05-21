// Test .......................
// perform these things

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

// test start...........................................................
// create node
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

// linked list
function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.addItem = function (value) {
  let newNode = new Node(value);

  // if head is null
  if (this.head === null) {
    this.head = newNode;
    this.length++;
    return;
  }
  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this.length++;
  return;
};
LinkedList.prototype.addItemAtHead = function (value) {
    let newNode = new Node(value);

    // if head is null
    if(this.head === null){
        this.head = newNode;
        newNode.next = null;
        this.length++;
        return;
    }
    let currentNode = this.head;
    this.head = newNode;
    newNode.next = currentNode;
    this.length++;
    return;
};
LinkedList.prototype.addItemAtIndex = function (value, index) {
    if(index < 0 || index > this.length) return null;

    let newNode = new Node(value);

    // insert at head
    if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
    }

    let count = 0;
    let current = this.head;
    let prev = null;

    while(count < index){
        prev = current;
        current = current.next;
        count++
    }

    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return;

};
LinkedList.prototype.deleteHeadItem = function () {
    if(this.head === null) return null;

    this.head = this.head.next;
    this.length--;
    return ;
};
LinkedList.prototype.deleteTailItem = function () {
    if(this.head === null) return null;

    // single node case
    if(this.head.next === null){
        this.head = null;
        this.length--;
        return;
    }

    let currentNode = this.head;
    let prevNode = null;
    while(currentNode.next !== null){
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.length--;
    return;
};
LinkedList.prototype.deleteAtIndex = function (index) {

    if(typeof index !== "number") return null;
    if(index < 0 || index >= this.length) return null;

    if(index === 0){
        this.head = this.head.next;
        this.length--;
        return;
    }

    let currentNode = this.head;;
    let prevNode = null;
    let count = 0;

    while(count < index){
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }

    prevNode.next = currentNode.next;
    this.length--;
    return;
};
LinkedList.prototype.updateAtIndex = function (value, index) {
    // check index out of range
    if(index < 0 || index >= this.length) return null;

    // update at head
    if(index === 0){
        this.head.value = value;
        return;
    }

    let currentNode = this.head;
    let count = 0;

    // reach the node at given index
    while(count < index){
        currentNode = currentNode.next;
        count++
    }

    // update to given index
    currentNode.value = value;
    return;
};
LinkedList.prototype.updateHeadValue = function (value) {
    if(this.head === null) return null;

    this.head.value = value;
};
LinkedList.prototype.updateTailValue = function (value) {
    if(this.head === null) return null;

    let currentNode = this.head;
    while(currentNode.next !== null){
        currentNode = currentNode.next;
    }
    currentNode.value = value;
};
LinkedList.prototype.traverse = function () {
   if(this.head === null) return null;

   // travers the node
   let currentNode = this.head;
   while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
   }
};

let list = new LinkedList();
list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItem(50);
list.addItem(60);
list.addItemAtHead(0);
list.addItemAtIndex(35,4);
list.deleteHeadItem();
list.deleteTailItem();
list.deleteAtIndex(4);
list.updateAtIndex(36,4);
list.updateHeadValue(1);
list.updateTailValue(65);
list.traverse();
