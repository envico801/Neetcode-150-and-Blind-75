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

Knowing that an element 'n' is the start of a sequence if (n - 1) does not exist in the array, how could we efficiently solve this problem using a hashset?

A) Add all elements to the hashset. Then, for each element 'n', if (n - 1) is not in the hashset, check and count the longest sequence starting from 'n'.

B) Add all elements to the hashset. Then, for each element 'n', if (n + 1) is in the hashset, check and count the longest sequence starting from 'n'.  

========== Answer ==========  

**Answer**: A

We then iterate through each element 'n' and if (n - 1) is not in the hashset, we check for the longest sequence starting from 'n'. This is because if (n-1) does not exist, 'n' must be the starting point of a sequence. We then check for the existence of (n + 1), (n + 2), and so on in the hashset, and count the length of the sequence. This approach ensures that we don't repeatedly check the same sequence and keeps the time complexity to O(n).

========== Id ==========  
54

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#54-Longest-consecutive-sequence-given-an-arra

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
