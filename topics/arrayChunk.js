const chunck = (array, size) => {
  let index = 0;
  const chuncked = [];
  while (index < array.length) {
    const chunck = array.slice(index, index + size);

    console.log("---------", chunck);

    chuncked.push(chunck);
    index += size;
  }
  return chuncked;
};

console.log(chunck([1, 2, 3, 4, 5, 6, 7, 8], 3));
