function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const res = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([1, 3, 7, 9, 2], 11);

console.log(res);
console.log(res2);
