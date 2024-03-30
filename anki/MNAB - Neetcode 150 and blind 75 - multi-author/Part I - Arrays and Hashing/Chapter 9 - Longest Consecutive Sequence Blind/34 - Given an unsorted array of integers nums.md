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

Knowing that an element 'n' is the start of a sequence if (n - 1) does not exist
in the array, how could we efficiently solve this problem using a hashset?

A) Add all elements to the hashset. Then, for each element 'n', if (n - 1) is
not in the hashset, check and count the longest sequence starting from 'n'.

B) Add all elements to the hashset. Then, for each element 'n', if (n + 1) is in
the hashset, check and count the longest sequence starting from 'n'.  

========== Answer ==========  

**Answer**: A

We then iterate through each element 'n' and if (n - 1) is not in the hashset,
we check for the longest sequence starting from 'n'. This is because if (n-1)
does not exist, 'n' must be the starting point of a sequence. We then check for
the existence of (n + 1), (n + 2), and so on in the hashset, and count the
length of the sequence. This approach ensures that we don't repeatedly check the
same sequence and keeps the time complexity to O(n).

========== Id ==========  
34

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays and Hashing::Chapter 9 - Longest Consecutive Sequence Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-and-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#34-Given-an-unsorted-array-of-integers-nums

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
