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

What is the space complexity of the entire solution using a hashmap and a heap?

A) O(1)

B) O(k)

C) O(n)

D) O(n + k)  

========== Answer ==========  

**Answer**: C

The space complexity is O(n) because:

1. The hashmap stores at most n different elements and their frequencies

2. The heap stores at most k elements, where k ≤ n

Therefore, O(n) dominates O(k), making the total space complexity O(n).

========== Id ==========  
28

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 5 - Top K Frequent Elements - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#28-Top-k-elements-in-list-given-an-integer-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
