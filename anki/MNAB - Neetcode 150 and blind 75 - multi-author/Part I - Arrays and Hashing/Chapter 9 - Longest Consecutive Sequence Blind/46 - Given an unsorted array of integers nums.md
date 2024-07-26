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

Consider the array `[1, 2, 3, 4, 5, 6]`. If we naively iterate through this
array, treating each element `n` as the potential start of a sequence, we would
check for the existence of each subsequent number `n + 1`. What would be the
time complexity of such an approach?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: C

For every element in the array, except for 6, the follow-up element n + 1 does
exist. So for each element, in the worst case, we would iterate n - 1 times to
build each sequence, resulting in a time complexity of O(n^2).

========== Id ==========  
46

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 9 - Longest Consecutive Sequence Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#46-Given-an-unsorted-array-of-integers-nums

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
