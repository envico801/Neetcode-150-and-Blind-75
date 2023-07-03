// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Method 1 - Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums: number[]): boolean {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
}

// Method 2 - Using Set (shorter)
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicateMethod2(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

const nums: number[] = [1, 2, 3];
console.log(containsDuplicate(nums));
