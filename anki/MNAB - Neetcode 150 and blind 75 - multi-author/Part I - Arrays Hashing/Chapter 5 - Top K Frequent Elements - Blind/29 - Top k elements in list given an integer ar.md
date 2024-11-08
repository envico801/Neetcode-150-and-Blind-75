========== Question ==========  

### Top K Elements in List

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always **unique**.

You may return the output in **any order**.

**Example 1:**

```
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]
```

**Example 2:**

```
Input: nums = [7,7], k = 1
Output: [7]
```

**Constraints:**

-   `1 <= nums.length <= 10^4`.

-   `-1000 <= nums[i] <= 1000`

-   `1 <= k <= number of distinct elements in nums`.

---

What is the total time complexity of the optimal solution using a hashmap and heap?

A) O(n)

B) O(n log n)

C) O(n log k)

D) O(k log n)  

========== Answer ==========  

**Answer**: C

The total time complexity is O(n log k) because:

1. Building the frequency map: O(n)

2. Building and maintaining a heap of size k for n elements: O(n log k)

The dominant term is O(n log k), which becomes the final time complexity.

========== Id ==========  
29

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 5 - Top K Frequent Elements - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#29-Top-k-elements-in-list-given-an-integer-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
