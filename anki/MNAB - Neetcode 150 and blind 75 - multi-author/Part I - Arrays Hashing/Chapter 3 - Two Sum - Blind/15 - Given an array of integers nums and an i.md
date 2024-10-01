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

For any given element `x` within the array, how many possible unique `y-values` would satisfy `target = x + y`?

A) 1

B) 2

C) n - 1

D) n  

========== Answer ==========  

**Answer**: A

We can solve this equation for y: y = target - x. For example, if target=9, and x=2, then y = 9 - 2 = 7. In mathematics, this value is known as the complement.

========== Id ==========  
15

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 3 - Two Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-3-Two-Sum-Blind::#15-Given-an-array-of-integers-nums-and-an-i

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
