class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;

    if (!this.head) {
      return undefined;
    }

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return;
  }
  shift() {
    let temp = this.head;
    this.head = this.head.next;

    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return temp;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.length) {
      return null;
    }
    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }

    return null;
  }
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) {
      return this.unShift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  null() {
    this.head = null;
  }
}
const myLinkedList = new linkedList(1);
myLinkedList.push(10);
myLinkedList.push(13);
myLinkedList.push(19);
// myLinkedList.unShift(2);

console.log(myLinkedList.size());
