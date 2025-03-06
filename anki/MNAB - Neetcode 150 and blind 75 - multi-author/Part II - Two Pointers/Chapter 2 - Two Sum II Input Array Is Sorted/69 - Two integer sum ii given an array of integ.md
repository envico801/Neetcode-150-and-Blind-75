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

What is the significance of the constraint that indices must be 1-indexed in the returned result?

A) It affects the algorithm's logic

B) It only affects the final returned values

C) It requires additional space

D) It makes the problem more complex  

========== Answer ==========  

**Answer**: B

The 1-indexed requirement:

1. Only affects how we return the final answer

2. Doesn't change the core algorithm logic

3. Can be handled by adding 1 to found indices

4. Is just a presentation detail, not a computational concern

========== Id ==========  
69

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 2 - Two Sum II Input Array Is Sorted

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-2-Two-Sum-II-Input-Array-Is-Sorted::#69-Two-integer-sum-ii-given-an-array-of-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
