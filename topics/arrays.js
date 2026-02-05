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
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }
  delete(index) {
    const deletedItem = this.data[index];

    delete this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }
  // or
  // delete(index) {
  //   for (let i = index; i < this.length - 1; i++) {
  //     this.data[i] = this.data[i + 1];
  //   }
  //   delete this.data[this.length - 1];
  //   this.length--;
  // }
}

const myNewArray = new MyArray();

myNewArray.push("Well");
myNewArray.push("who");
myNewArray.push("Why");

myNewArray.get(2);
myNewArray.pop();

console.log(myNewArray);

console.log(myNewArray.delete(1));
console.log(myNewArray);
