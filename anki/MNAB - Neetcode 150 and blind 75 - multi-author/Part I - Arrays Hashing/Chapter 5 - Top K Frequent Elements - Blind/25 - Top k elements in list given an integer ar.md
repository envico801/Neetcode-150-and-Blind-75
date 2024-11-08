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

What is the first step in solving this problem efficiently?

A) Sort the array

B) Count the frequency of each element using a hashmap

C) Create a min-heap

D) Create a stack  

========== Answer ==========  

**Answer**: B

Counting the frequency of each element using a hashmap is the crucial first step. This allows us to know how many times each number appears in O(n) time, which we'll need before we can determine the k most frequent elements.

========== Id ==========  
25

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 5 - Top K Frequent Elements - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#25-Top-k-elements-in-list-given-an-integer-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
