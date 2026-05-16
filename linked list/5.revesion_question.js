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
function Node (value, next=null){
   this.value = value;
   this.next = next;
}

// create linked list
function linkedList (){
    this.head = null;
    this.length = 0;
}

// add new node
linkedList.prototype.addItem = function (value){
    let newNode = new Node(value);

    let currentNode = this.head;
    while(currentNode.next !== null){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
}

// add new node at head
linkedList.prototype.addItemAtHead = function (value){}

// add new node at given Index
linkedList.prototype.addItemAtIndex = function (value, index){}

// travers with linked list
linkedList.prototype.travers = function (){
    let currentNode = this.head;
    while(currentNode !== null){
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}


let list = new linkedList()
list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItemAtHead(0)
list.travers();