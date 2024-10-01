========== Question ==========  

### Given an array of integers `nums` and an integer `target`, _return indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

---

How can you find all pairs of elements `x1, x2` within an array, which have a different index?

A) Sorting the array and using binary search to find a pair

B) Using two nested loops to iterate over all pairs of elements

C) Using divide and conquer to recursively find pairs  

========== Answer ==========  

**Answer**: B

To find all pairs of elements with different indices in the array, you can use two nested loops. The first loop iterates over each element, while the second loop only iterates over the elements to the right of the current element. This allows you to compare all possible pairs without duplicates.

========== Id ==========  
13

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#13-Given-an-array-of-integers-nums-and-an-i

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
