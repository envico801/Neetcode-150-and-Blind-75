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

When considering the parameters that affect the amount of water a container can hold, we know that the distance between the two lines is important. Given this, where should we initially place the two pointers in order to maximize the chance of finding the largest possible area?

A) In the middle of the array

B) At the shortest and tallest lines

C) At the two ends of the array

D) At random positions in the array  

========== Answer ==========  

**Answer**: C

To maximize the initial area, we should start with the widest possible container, by placing the two pointers at the two ends of the array. This allows us to be greedy and maximize the distance between the two lines. From there, we can move the pointers inward to explore other possible containers.

========== Id ==========  
48

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#48-Max-water-container-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
