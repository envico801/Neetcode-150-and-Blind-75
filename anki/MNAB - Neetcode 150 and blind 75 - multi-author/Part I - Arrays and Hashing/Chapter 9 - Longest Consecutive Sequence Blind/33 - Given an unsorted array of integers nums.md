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

Consider the array `[100, 4, 200, 1, 3, 2]`. This array contains two sequences:
`[1, 2, 3, 4]` and `[100, 200]`. What common trait do the starting elements `1`
and `100` share, which suggests they are the beginning of these sequences?

A) They are the smallest numbers in their respective sequences.

B) The element (n - 1) does not exist in the array.

C) The element (n + 1) does exist in the array.

D) They are the largest numbers in their respective sequences.  

========== Answer ==========  

**Answer**: B

The key observation is that for any number 'n' to be the start of a sequence,
the number (n - 1) must not exist in the array. This is because if (n-1) exists,
'n' would be part of a sequence starting at least from (n-1). In this case, for
'1' and '100', neither '0' nor '99' exist in the array, indicating that '1' and
'100' can indeed be the starting points of their sequences.

========== Id ==========  
33

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 9 - Longest Consecutive Sequence Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#33-Given-an-unsorted-array-of-integers-nums

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
