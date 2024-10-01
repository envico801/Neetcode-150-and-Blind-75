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

Can you reduce the time complexity of the algorithm to find the indices of two numbers that add up to the target using a data structure?

A) No, the time complexity cannot be reduced

B) Yes, using a priority queue

C) Yes, using a hashmap

D) Yes, using a balanced binary search tree  

========== Answer ==========  

**Answer**: C

Yes, you can reduce the time complexity using a hashmap. A hashmap allows you to store and retrieve values in O(1) - constant time, which can help you find the required indices more efficiently than a brute-force solution.

========== Id ==========  
16

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#16-Given-an-array-of-integers-nums-and-an-i

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
