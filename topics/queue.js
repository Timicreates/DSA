class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;

    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;

    this.length++;
    return this;
  }
  dequeue() {
    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = temp.next;
    temp = null;

    this.length--;
  }
}

let myQueue = new queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.min();
console.log(myQueue);
