========== Question ==========  

### Container With Most Water

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/abc2d8fd-6012-4f88-7674-f6302aaf4200/public)

**Example 1:**

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Constraints:**

-   `n == height.length`

-   `2 <= n <= 10^5`

-   `0 <= height[i] <= 10^4`

---

What is the time and space complexity of the solution using the two-pointer technique?

A) Time complexity: O(n), Space complexity: O(n)

B) Time complexity: O(n log n), Space complexity: O(n)

C) Time complexity: O(n^2), Space complexity: O(1)

D) Time complexity: O(n), Space complexity: O(1)  

========== Answer ==========  

**Answer**: D

The two-pointer solution has a time complexity of O(n) because you need to iterate through the array once. The space complexity is O(1) as we only use two pointers and a few variables to keep track of the maximum area, regardless of the size of the input array.

========== Id ==========  
51

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#51-Container-with-most-water-you-are-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
