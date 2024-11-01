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

For a given array of integers, what is the time complexity of finding the length of the longest consecutive sequence using sorting?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: B

Sorting an array generally takes O(n log n) time. Once the array is sorted, you could iterate through the array once to find the longest consecutive sequence, which would take O(n) time. However, the dominating factor is the sorting time complexity, thus the overall time complexity is O(n log n).

========== Id ==========  
35

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#35-Longest-consecutive-sequence-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
