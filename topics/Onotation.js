// O of n  O(n)

const studentDatabase = ["David", "erick", "segun", "emma"];

const findStudent = (students, studentName) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === studentName) {
      console.log(`found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "erick");

const groceries = ["eggs", "milk", "bread", "sugar", "oats"];

const searchGroceries = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found : ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; i++) {
    if (groceries[j] === item) {
      console.log(`Found :${item} 2`);
    }
  }
};

// O of 1 O(1 )

const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index];

console.log(getElement(numbers, 0));

// O of n^2 O(n^2)

const findPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair : ${arr[i]}, ${arr[j]}`);
    }
  }
  for (let k = 0; k < arr.length; k++) {
    console.log(`---------------- ${arr[k]}`);
  }
};
// const numbers = [1, 2, 3, 4, 5];

findPairs(numbers);

// O ( n^2+ n ) if we combine both .

// O (n^2) is the dominant term.

// n is a non dominant term.

// so we remove the non dominant term and we are left with O(n^2)

// this way we simplify our big O
