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

The two-pointer technique ensures that we don't need to enumerate all n^2 combinations of pointers to find the maximal solution. How does the technique achieve this?

A) By ensuring that every element in the array is guaranteed to have a pointer land on it at some point.

B) By skipping combinations that will never lead to a more maximal solution.

C) Both A and B.

D) None of the above.  

========== Answer ==========  

**Answer**: C

The two-pointer technique starts with the widest possible container and moves the pointers inward, always choosing the pointer at the shorter line to move. This ensures that every element in the array is guaranteed to have a pointer land on it at some point. It also avoids unnecessary combinations by skipping those that won't lead to a larger area (i.e., those where the container would be narrower but not taller). This solution is based on a ‘proof by contradiction’. Since we are being greedy and only skipping combinations that won’t lead to a new maximum, we are guaranteed to find the solution.

========== Id ==========  
50

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#50-Container-with-most-water-you-are-given-an

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
