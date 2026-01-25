class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const myNewArray = new MyArray();

myNewArray.push("Well");
myNewArray.push("who");
myNewArray.push("Why");

myNewArray.get(2);
myNewArray.pop();

console.log(myNewArray);
