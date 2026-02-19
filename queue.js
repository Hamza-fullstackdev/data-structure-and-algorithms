class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tail - this.head;
  }

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.items[this.head]}`;
    for (let i = this.head + 1; i < this.tail; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
