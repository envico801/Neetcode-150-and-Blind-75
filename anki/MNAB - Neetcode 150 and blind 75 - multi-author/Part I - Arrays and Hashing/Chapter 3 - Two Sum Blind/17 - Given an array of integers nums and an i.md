========== Question ==========  

### Given an array of integers `nums` and an integer `target`, _return indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **exactly one solution**, and you may
not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

---

How can a hashmap be used to efficiently find the indices of two numbers that
add up to the target in an array?

A) Key = Index of each element, Value = Difference between the target and the
corresponding element;

then for each element check if the difference between the target and the element
exists as a value in the hashmap.

B) Key = Each element in the array, Value = The index of the corresponding
element;

then for each element check if the difference exists in the hashmap as a key,
and that it has a different index from the current element.  

========== Answer ==========  

**Answer**: B

By storing each element in the array as a key and its index as the corresponding
value in the hashmap, you can efficiently find the required pair. For each
element, you can efficiently calculate the difference and check if it’s a key
within the hashmap. If it does, we can get the index from the hashmap. If the
index of the difference is different from the index of the current element
(remember we are not allowed reuse the same element twice), then you've found
the solution.

========== Id ==========  
17

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 3 - Two Sum Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-3-Two-Sum-Blind::#17-Given-an-array-of-integers-nums-and-an-i

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
