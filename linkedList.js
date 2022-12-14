class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next
  }

}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data){
    this.head = new Node(data, this.head);
  }
  //insert last node

  //insert at index

  // Get at index

  // Remove at index

  // clear list

  // Print list data
  printListData(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.printListData()