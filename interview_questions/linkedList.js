// linked list interview question practice.....

// create node
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

// create linked list
function linkedList() {
  this.head = null;
  this.length = 0;
}

// add item fn
linkedList.prototype.addItem = function (value) {
  let newNode = new Node(value);

  if (this.head === null) {
    this.head = newNode;
  }

  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this.length++;
};

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
list.travers();
