========== Question ==========  

### Max Water Container

You are given an integer array `heights` where `heights[i]` represents the height of the ithi^{th}ith bar.

You may choose any two bars to form a container. Return the _maximum_ amount of water a container can store.

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/77f004c6-e773-4e63-7b99-a2309303c700/public)

```
Input: height = [1,7,2,5,4,7,3,6]
Output: 36
```

**Example 2:**

```
Input: height = [2,2,2]
Output: 4
```

**Constraints:**

-   `2 <= height.length <= 1000`

-   `0 <= height[i] <= 1000`

---

Consider a brute-force solution where you calculate the area for all possible pairs of lines. What would be the time complexity of such an approach?

A) O(n)

B) O(n log n)

C) O(n^2)

D) O(2^n)  

========== Answer ==========  

**Answer**: C

In a brute-force solution, you would have two nested loops to calculate the area for all pairs of lines. There are n\*(n-1)/2 unique pairs, so the time complexity is O(n^2).

========== Id ==========  
76

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#76-Max-water-container-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
