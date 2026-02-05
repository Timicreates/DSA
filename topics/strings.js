// reversing a string

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("welcome"));

palindrome;

const palindrome = (str) => str.split("").reverse().join("") === str;

console.log(palindrome("abba"));

const reverseNum = (n) => {
  const reversedNum = n.toString().split("").reverse().join("");

  return parseInt(reversedNum) * Math.sign(n);
};

console.log(reverseNum(12345));

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalize("hello world"));
