class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newnode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let last = this.first;
    this.first = last.next;
    last = null;

    this.length--;

    return last;
  }
}

let theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.pop();
console.log(theStack);
