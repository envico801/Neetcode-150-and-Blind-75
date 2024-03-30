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

What is the overall time complexity of the approach using a Hashmap and a Heap
(Priority Queue) to find the k most frequent elements?

A) O(n)

B) O(n log k)

C) O(n log n)

D) O(k log n + n)  

========== Answer ==========  

**Answer**: D

The overall time complexity of the approach using a Hashmap and a Heap (Priority
Queue) to find the k most frequent elements is O(k log n + n), where n is the
size of the input array. This is because:

1. Calculating the frequencies using a Hashmap takes O(n) time.

2. Building a Heap (Priority Queue) of size k and inserting all elements and
    their frequencies into it takes O(k log n) time.

Therefore, the overall time complexity is O(k log n + n), which satisfies the
follow-up condition of being better than O(n log n).

========== Id ==========  
32

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 5 - Top K Frequent Elements Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-5-Top-K-Frequent-Elements-Blind::#32-Given-an-integer-array-nums-and-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
