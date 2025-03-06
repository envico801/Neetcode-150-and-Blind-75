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

Consider the array `[1, 2, 3, 4, 5, 6]`. If we naively iterate through this array, treating each element `n` as the potential start of a sequence, we would check for the existence of each subsequent number `n + 1`. What would be the time complexity of such an approach?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: C

For every element in the array, except for 6, the follow-up element n + 1 does exist. So for each element, in the worst case, we would iterate n - 1 times to build each sequence, resulting in a time complexity of O(n^2).

========== Id ==========  
52

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#52-Longest-consecutive-sequence-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
