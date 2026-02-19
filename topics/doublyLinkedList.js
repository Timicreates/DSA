class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail.next = null;
    this.tail = null;
    temp.prev = null;

    this.length--;
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head.next = this.head;
    this.head.prev = null;
    temp.next = null;
    this.length--;

    return temp;
  }
  switch() {
    let temp = this.head;
    let demp = this.tail;

    this.head = demp;
    this.tail = temp;

    temp.next = null;
    demp.prev = null;
  }
}

let myDoubleLinkedList = new DoublyLinkedList(0);

myDoubleLinkedList.push(1);
myDoubleLinkedList.push(2);
myDoubleLinkedList.push(3);
console.log(myDoubleLinkedList);
