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

-   `0 <= nums.length <= 10^5`

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
29

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part I - Arrays Hashing::Chapter 9 - Longest Consecutive Sequence - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-I-Arrays-Hashing::#Chapter-9-Longest-Consecutive-Sequence-Blind::#29-Given-an-unsorted-array-of-integers-nums

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
