========== Question ==========  

### Two Integer Sum II

Given an array of integers `numbers` that is sorted in **non-decreasing order**.

Return the indices (**1-indexed**) of two numbers, `[index1, index2]`, such that they add up to a given target number `target` and `index1 < index2`. Note that `index1` and `index2` cannot be equal, therefore you may not use the same element twice.

There will always be **exactly one valid solution**.

Your solution must use `O(1)` additional space.

**Example 1:**

```
Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
```

Explanation:

The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, `index1` = 1, `index2` = 2. We return `[1, 2]`.

**Constraints:**

-   `2 <= numbers.length <= 1000`

-   `-1000 <= numbers[i] <= 1000`

-   `-1000 <= target <= 1000`

---

Why can we guarantee that we won't miss the solution using the two-pointer approach?

A) Because we check every possible combination

B) Because the array is sorted and we systematically eliminate impossible combinations

C) Because there's always exactly one solution

D) Because we use both pointers simultaneously  

========== Answer ==========  

**Answer**: B

We won't miss the solution because:

1. The array is sorted, so moving pointers has predictable effects on sum

2. When sum is too large, all combinations with right pointer's current position are too large

3. When sum is too small, all combinations with left pointer's current position are too small

4. We systematically eliminate impossible combinations while maintaining completeness

========== Id ==========  
66

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 2 - Two Sum II Input Array Is Sorted

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-2-Two-Sum-II-Input-Array-Is-Sorted::#66-Two-integer-sum-ii-given-an-array-of-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
