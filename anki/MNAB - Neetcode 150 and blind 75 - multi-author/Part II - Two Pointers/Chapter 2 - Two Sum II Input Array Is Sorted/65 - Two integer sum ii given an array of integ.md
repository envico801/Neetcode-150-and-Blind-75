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

What is the time complexity of the optimal two-pointer solution?

A) O(log n)

B) O(n)

C) O(n log n)

D) O(n^2)  

========== Answer ==========  

**Answer**: B

The time complexity is O(n) because:

1. Each element is visited at most once

2. Both pointers move inward, never going back

3. In worst case, we might need to traverse entire array

4. No nested loops or additional operations needed

========== Id ==========  
65

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 2 - Two Sum II Input Array Is Sorted

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-2-Two-Sum-II-Input-Array-Is-Sorted::#65-Two-integer-sum-ii-given-an-array-of-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
