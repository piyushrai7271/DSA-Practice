// create node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // add item at tail
  addItem(value) {
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
  }
  // add item at head
  addItemAtHead(value) {
    let newNode = new Node(value);

    // if head is null
    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }

    let currentNode = this.head;

    this.head = newNode;
    newNode.next = currentNode;

    this.length++;
  }
  // add item at specific index
  addItemAtIndex(value, index) {
    if (index < 0 || index > this.length) return null;

    let newNode = new Node(value);

    // insert at head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = newNode;
    newNode.next = current;

    this.length++;
  }
  // delete head item
  deleteHeadItem() {
    if (this.head === null) return null;

    this.head = this.head.next;
    this.length--;
  }
  // delete tail item
  deleteTailItem() {
    if (this.head === null) return null;

    // single node case
    if (this.head.next === null) {
      this.head = null;
      this.length--;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.length--;
  }
  // delete at index
  deleteAtIndex(index) {
    if (typeof index !== "number") return null;
    if (index < 0 || index >= this.length) return null;

    // delete head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let count = 0;

    while (count < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    prevNode.next = currentNode.next;
    this.length--;
  }
  // update at index
  updateAtIndex(value, index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.value = value;
  }
  // update head value
  updateHeadValue(value) {
    if (this.head === null) return null;

    this.head.value = value;
  }
  // update tail value
  updateTailValue(value) {
    if (this.head === null) return null;

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.value = value;
  }
  // traverse linked list
  traverse() {
    if (this.head === null) return null;

    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// usage
let list = new LinkedList();

list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItem(50);
list.addItem(60);

list.addItemAtHead(0);
list.addItemAtIndex(35, 4);
list.deleteHeadItem();
list.deleteTailItem();
list.deleteAtIndex(4);
list.updateAtIndex(36, 4);
list.updateHeadValue(1);
list.updateTailValue(65);
list.traverse();