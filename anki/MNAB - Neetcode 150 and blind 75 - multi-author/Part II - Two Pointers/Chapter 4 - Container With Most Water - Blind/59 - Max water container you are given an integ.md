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

The problem is about finding two lines that together with the x-axis form a container such that the container contains the most water. Which of the following is the key factor that determines the amount of water a container can hold?

A) The height of the shortest line

B) The height of the tallest line

C) The distance between the two lines

D) Both A and C  

========== Answer ==========  

**Answer**: D

The amount of water a container can hold is determined by the height of the shortest line (since water will overflow from the shorter line) and the distance between the two lines (since a wider container can hold more water).

========== Id ==========  
59

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#59-Max-water-container-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
