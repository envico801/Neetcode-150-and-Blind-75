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

How does the two-pointer approach help in eliminating duplicates in the output?

A) It doesn't, duplicates must be handled separately

B) By skipping over duplicate elements in the sorted array after finding a valid triplet, and also when choosing the first number in the triplet

C) By checking if the current triplet is already in the output before adding it  

========== Answer ==========  

**Answer**: B

When we find a valid triplet, we increment the left pointer until we find a new value. This ensures that we do not add the same triplet multiple times when the array contains duplicates. Additionally, when choosing the first number for our triplet, if this number is the same as the previous number, we can skip it. This is because any valid triplets including this number would have already been found in the previous iteration. These steps effectively eliminate duplicate solutions in the final result set.

========== Id ==========  
73

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 3 - 3Sum - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-3-3Sum-Blind::#73-Three-integer-sum-given-an-integer-array

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
