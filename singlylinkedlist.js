class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedlist {
  constructor(head = null) {
    this.head = head;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  insertAtBeg(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtMidd(valueToInsert, valueAfterInsert) {
    let temp = this.head;

    while (temp !== null) {
      if (temp.data === valueAfterInsert) {
        const newNode = new Node(valueToInsert, temp.next);
        temp.next = newNode;
        return;
      }
      temp = temp.next;
    }
  }

  printLL() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let item = new SinglyLinkedlist();

item.insertAtEnd(10);
item.insertAtEnd(20);
item.insertAtEnd(30);
item.insertAtBeg(5);
item.insertAtMidd(80, 20);

item.printLL();
