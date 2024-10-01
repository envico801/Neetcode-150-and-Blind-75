========== Question ==========  

### Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

**Example 2:**

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

**Example 3:**

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

**Constraints:**

-   `3 <= nums.length <= 3000`

-   `10^5 <= nums[i] <= 10^5`

---

How can we find the optimal solution by using sorting?

A) Sort the array and use two pointers, decreasing the time complexity to O(n^2)

B) Sort the array and use binary search, decreasing the time complexity to O(n^2 log n)

C) Sorting cannot help in optimizing this problem  

========== Answer ==========  

**Answer**: A

By sorting the array, we can iterate through the array once and then use a two-pointer approach for each iteration. The two pointers can move towards each other until they meet, checking if the sum of the elements at the pointers equals the negative of the current element. This reduces the time complexity to O(n^2). A binary search approach will also work, but is less efficient.

========== Id ==========  
36

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 3 - 3Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-3-3Sum-Blind::#36-Given-an-integer-array-nums-return-all-th

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
