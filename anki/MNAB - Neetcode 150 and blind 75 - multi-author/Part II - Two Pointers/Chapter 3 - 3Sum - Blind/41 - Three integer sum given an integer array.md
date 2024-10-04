========== Question ==========  

### Three Integer Sum

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` where `nums[i] + nums[j] + nums[k] == 0`, and the indices `i`, `j` and `k` are all distinct.

The output should _not_ contain any duplicate triplets. You may return the output and the triplets in **any order**.

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

Explanation:

`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.`

`nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.`

`nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.`

The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.

**Example 2:**

```
Input: nums = [0,1,1]
Output: []
```

Explanation: The only possible triplet does not sum up to 0.

**Example 3:**

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
```

Explanation: The only possible triplet sums up to 0.

**Constraints:**

-   `3 <= nums.length <= 1000`

-   `-10^5 <= nums[i] <= 10^5`

---

What is a brute-force approach to solving this problem and what is the time complexity of this approach?

A) Iterate through all possible combinations of three elements, O(n^3) time complexity

B) Iterate through all elements, creating pair sums in a hash table, O(n^2) time complexity

C) Sort the array and apply binary search for each element, O(n^2 log n) time complexity  

========== Answer ==========  

**Answer**: A

The brute force approach would be to iterate through all possible triplets in the list and check if their sum is equal to zero. This would involve three nested loops and thus would have a time complexity of O(n^3).

========== Id ==========  
41

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 3 - 3Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-3-3Sum-Blind::#41-Three-integer-sum-given-an-integer-array

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Not safe to store
