========== Question ==========  

### Given an unsorted array of integers `nums`, return the _length of the longest consecutive elements sequence_.

You must write an algorithm that runs in `O(n)` time.

**Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Constraints:**

- `0 <= nums.length <= 10^5`

- `-10^9 <= nums[i] <= 10^9`

---

Suppose we are counting the length of a sequence starting at an arbitrary value,
say `n = 1.` To extend this sequence, we need to efficiently check for the
existence of the next integer `(n + 1)`, regardless of its index in the original
array. Which data structure would best serve this purpose?

A) Priority Queue

B) HashSet

C) Binary Search Tree

D) Array  

========== Answer ==========  

**Answer**: B

A HashSet can be used to efficiently check the existence of elements in O(1)
average time complexity. When extending a sequence, this property is essential,
allowing us to determine if the next integer (n + 1) exists in the original
array, regardless of its position.

========== Id ==========  
45

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 9 - Longest Consecutive Sequence Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#45-Given-an-unsorted-array-of-integers-nums

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
