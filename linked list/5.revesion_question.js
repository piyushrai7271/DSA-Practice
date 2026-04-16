// create node
function Node(value,next=null){
    this.value = value;
    this.next = next;
}

// create linkedList
function linkedList (){
    this.head = null;
    this.length = 0;
}

// add new node in list
linkedList.prototype.addItem = function (value){
  let newNode = new Node(value);

  // if list is empty
  if(this.head === null){
    this.head = newNode;
    this.length ++;
    return;
  }

  let currentNode = this.head;
  while(currentNode.next !== null){
      currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this.length++;
  return;
}
// add new item At head
linkedList.prototype.addItemAtHead = function (value){
    let newNode = new Node(value)

    let currentNode = this.head;
    this.head = newNode;
    newNode.next = currentNode;
    this.length++
    return;
}
// travers the linked list
linkedList.prototype.travers = function (){
   if(this.head === null) return null;

   let currentNode = this.head;
   while(currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
   }
}



let list = new linkedList();
list.addItem(10);
list.addItem(20);
list.addItem(30);
list.addItem(40);
list.addItemAtHead(0);
list.travers();
