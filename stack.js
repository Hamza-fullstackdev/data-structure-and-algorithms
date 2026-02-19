class Stack {
  constructor() {
    this.arr = [];
  }

  lengthOfStack() {
    return this.arr.length;
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    if (this.arr.length === 0) {
      console.log("Stack is empty!");
    }
    this.arr.pop();
  }
  peek() {
    if (this.arr.length === 0) {
      console.log("Stack is empty!");
    }
    console.log(this.arr[this.lengthOfStack() - 1]);
  }
}

const s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);
s1.pop();
s1.peek();
