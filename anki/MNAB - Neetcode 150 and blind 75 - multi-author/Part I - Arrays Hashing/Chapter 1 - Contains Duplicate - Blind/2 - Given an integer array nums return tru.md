========== Question ==========  

### Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false
```

**Constraints:**

-   `1 <= nums.length <= 10^5`

-   `10^9 <= nums[i] <= 10^9`

---

What is the time complexity of a brute force approach, where you compare every possible pair in the array to check if there are any duplicates?

A) O(n)

B) O(n \* log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: C

The brute-force solution using two nested loops has a time complexity of O(n^2) because for each element in the array, you need to iterate over up to n other elements.

========== Id ==========  
2

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 1 - Contains Duplicate - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-1-Contains-Duplicate-Blind::#2-Given-an-integer-array-nums-return-tru

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
