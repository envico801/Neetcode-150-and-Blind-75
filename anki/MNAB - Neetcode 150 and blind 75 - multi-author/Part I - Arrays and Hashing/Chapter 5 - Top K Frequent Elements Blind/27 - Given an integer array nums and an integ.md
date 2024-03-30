========== Question ==========  

### Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_. You may return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

- `1 <= nums.length <= 10^5`

- `-10^4 <= nums[i] <= 10^4`

- `k` is in the range `[1, the number of unique elements in the array]`.

- It is **guaranteed** that the answer is **unique**.

**Follow up:** Your algorithm's time complexity must be better than
`O(n log n)`, where n is the array's size.

---

Which data structure can be used to optimize the approach for finding the k most
frequent elements?

A) Queue

B) Priority Queue

C) Stack

D) Hashmap or HashMap  

========== Answer ==========  

**Answer**: D

A Hashmap (or HashMap) can be used to optimize the approach for finding the k
most frequent elements. The Hashmap can store the frequency of each element in
the array, allowing us to quickly retrieve the frequencies and find the k most
frequent elements.

========== Id ==========  
27

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 5 - Top K Frequent Elements Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#27-Given-an-integer-array-nums-and-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
