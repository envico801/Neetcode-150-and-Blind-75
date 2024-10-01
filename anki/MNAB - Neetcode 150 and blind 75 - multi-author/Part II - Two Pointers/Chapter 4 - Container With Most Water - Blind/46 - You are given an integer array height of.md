========== Question ==========  

### You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

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

The problem is about finding two lines that together with the x-axis form a container such that the container contains the most water. Which of the following is the key factor that determines the amount of water a container can hold?

A) The height of the shortest line

B) The height of the tallest line

C) The distance between the two lines

D) Both A and C  

========== Answer ==========  

**Answer**: D

The amount of water a container can hold is determined by the height of the shortest line (since water will overflow from the shorter line) and the distance between the two lines (since a wider container can hold more water).

========== Id ==========  
46

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#46-You-are-given-an-integer-array-height-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
