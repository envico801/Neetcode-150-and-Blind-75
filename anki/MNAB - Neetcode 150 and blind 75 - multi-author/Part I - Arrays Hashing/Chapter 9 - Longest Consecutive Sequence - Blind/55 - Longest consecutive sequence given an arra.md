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

What is the time and space complexity of the optimal solution using a HashSet and avoiding unnecessary checks?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: A

The HashSet solution has a time complexity of O(n) because you need to iterate through the array twice (once for building the HashSet and once for checking the sequences). The space complexity is also O(n) because, in the worst case, you might need to store all n elements in the HashSet.

========== Id ==========  
55

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#55-Longest-consecutive-sequence-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
