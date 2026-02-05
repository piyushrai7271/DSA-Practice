// HERE WE WILL LEARN CYCLIC LINKED LIST AND ITS QUESTION ON THIS PATTERN

// creating cyclic linked list

// create node
function Node (value, next = null){
    this.value = value;
    this.next = next;
}

// create linked list
function linkedList (){
    this.head = null;
    this.length = 0;
}

// Add new node
linkedList.prototype.addItem = function (value){
    let newNode = new Node(value);
    if(this.head === null){
        this.head = newNode;
    }else{
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.length++;
}

// Traverse node
linkedList.prototype.traverse = function (){
    if(this.head === null){
        return null;
    }else{
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let list = new linkedList();
list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItem(50);
list.addItem(60);
list.addItem(70);

// create cycle: last node → node with value 20
let first = list.head;           // 10
let second = first.next;         // 20
let current = list.head;

while (current.next !== null) {
    current = current.next;
}

// current is last node (50)
current.next = second;

list.traverse()
