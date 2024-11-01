========== Question ==========  

### Duplicate Integer

Given an integer array `nums`, return `true` if any value appears **more than once** in the array, otherwise return `false`.

**Example 1:**

```
Input: nums = [1, 2, 3, 3]
Output: true
```

**Example 2:**

```
Input: nums = [1, 2, 3, 4]
Output: false
```

---

What is the time and space complexity of the solution using a hashmap?

A) Time complexity: O(n)

Space complexity: O(n)

B) Time complexity: O(n \* log n)

Space complexity: O(n)

C) Time complexity: O(n^2)

Space complexity: O(1)

D) Time complexity: O(n)

Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The hashmap solution has a time complexity of O(n) because you need to iterate through the array once. Also, the key lookup operation with hashmaps runs in O(1) time. The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the hashmap.

========== Id ==========  
5

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 1 - Contains Duplicate - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-1-Contains-Duplicate-Blind::#5-Duplicate-integer-given-an-integer-array

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
