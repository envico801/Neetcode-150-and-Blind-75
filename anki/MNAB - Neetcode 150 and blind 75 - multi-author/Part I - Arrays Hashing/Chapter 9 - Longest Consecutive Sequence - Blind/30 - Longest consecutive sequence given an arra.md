========== Question ==========  

### Longest Consecutive Sequence

Given an array of integers `nums`, return _the length_ of the longest consecutive sequence of elements.

A _consecutive sequence_ is a sequence of elements in which each element is exactly `1` greater than the previous element.

You must write an algorithm that runs in `O(n)` time.

**Example 1:**

```
Input: nums = [2,20,4,10,3,4,5]
Output: 4
```

Explanation: The longest consecutive sequence is `[2, 3, 4, 5]`.

**Example 2:**

```
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
```

**Constraints:**

-   `0 <= nums.length <= 1000`

-   `-10^9 <= nums[i] <= 10^9`

---

Suppose we are counting the length of a sequence starting at an arbitrary value, say `n = 1.` To extend this sequence, we need to efficiently check for the existence of the next integer `(n + 1)`, regardless of its index in the original array. Which data structure would best serve this purpose?

A) Priority Queue

B) HashSet

C) Binary Search Tree

D) Array  

========== Answer ==========  

**Answer**: B

A HashSet can be used to efficiently check the existence of elements in O(1) average time complexity. When extending a sequence, this property is essential, allowing us to determine if the next integer (n + 1) exists in the original array, regardless of its position.

========== Id ==========  
30

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#30-Longest-consecutive-sequence-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
