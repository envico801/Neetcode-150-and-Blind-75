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

What is the time complexity of counting the frequency of each element in the array?

A) O(n log n)

B) O(n)

C) O(k)

D) O(n^2)  

========== Answer ==========  

**Answer**: B

Using a hashmap to count frequencies requires one pass through the array, accessing and updating the hashmap in O(1) time for each element. Therefore, the total time complexity is O(n) where n is the length of the array.

========== Id ==========  
26

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 5 - Top K Frequent Elements - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#26-Top-k-elements-in-list-given-an-integer-ar

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
