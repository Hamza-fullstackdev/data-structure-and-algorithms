class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLL {
  constructor(head = null) {
    this.head = head;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  insertAtBeg(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.prev = newNode;
    this.head = newNode;
  }

  insertAtMidd(toInsert, afterInsert) {
    const newNode = new Node(toInsert);

    if (!this.head) {
      console.log("Linked List Is Empty Bruh");
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      if (temp.data == afterInsert) {
        newNode.next = temp.next;
        temp.prev = newNode;
        temp.next = newNode;
        newNode.prev = temp;
        break;
      }
      temp = temp.next;
    }
  }

  deleteLL(data) {
    if (!this.head) return;

    let temp = this.head;

    while (temp !== null) {
      if (temp.data == data) {
        if (temp.prev) {
          temp.prev.next = temp.next;
        } else {
          this.head = temp.next;
        }

        if (temp.next) {
          temp.next.prev = temp.prev;
        }
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

const l1 = new DoublyLL();
l1.insertAtEnd(10);
l1.insertAtEnd(20);
l1.insertAtEnd(30);
l1.insertAtBeg(5);
l1.insertAtMidd(80, 20);
l1.insertAtMidd(50, 10);
l1.deleteLL(5);
l1.printLL();
