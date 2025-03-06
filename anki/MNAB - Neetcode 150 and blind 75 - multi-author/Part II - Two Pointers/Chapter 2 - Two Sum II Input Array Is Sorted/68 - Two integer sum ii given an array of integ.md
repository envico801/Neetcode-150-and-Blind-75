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

Why is binary search not the optimal approach for this problem despite the array being sorted?

A) Because it would require O(n log n) time

B) Because it would require O(n) space

C) Because it wouldn't handle negative numbers

D) Because two pointers is simpler and equally efficient  

========== Answer ==========  

**Answer**: A

Binary search is not optimal because:

1. We'd need to binary search for each element: O(n log n) time

2. Two pointers achieves O(n) time complexity

3. Two pointers uses O(1) space as required

4. Two pointers is both simpler and more efficient

========== Id ==========  
68

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 2 - Two Sum II Input Array Is Sorted

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-2-Two-Sum-II-Input-Array-Is-Sorted::#68-Two-integer-sum-ii-given-an-array-of-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
