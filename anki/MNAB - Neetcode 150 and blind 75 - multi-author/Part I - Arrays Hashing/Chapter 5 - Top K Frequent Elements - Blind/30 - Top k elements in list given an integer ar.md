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

If k equals the number of distinct elements in the array, what does the problem reduce to?

A) Finding all elements in sorted order

B) Finding all elements in reverse sorted order by frequency

C) Finding the maximum element

D) Finding the minimum element  

========== Answer ==========  

**Answer**: B

When k equals the number of distinct elements, we need to return all unique elements sorted by their frequency in descending order, effectively returning all elements in reverse sorted order by frequency.

========== Id ==========  
30

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 5 - Top K Frequent Elements - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#30-Top-k-elements-in-list-given-an-integer-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
