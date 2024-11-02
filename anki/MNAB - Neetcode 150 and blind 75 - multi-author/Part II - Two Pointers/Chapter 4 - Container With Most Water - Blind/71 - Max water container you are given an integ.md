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

The two-pointer technique ensures that we don't need to enumerate all n^2 combinations of pointers to find the maximal solution. How does the technique achieve this?

A) By ensuring that every element in the array is guaranteed to have a pointer land on it at some point.

B) By skipping combinations that will never lead to a more maximal solution.

C) Both A and B.

D) None of the above.  

========== Answer ==========  

**Answer**: C

The two-pointer technique starts with the widest possible container and moves the pointers inward, always choosing the pointer at the shorter line to move. This ensures that every element in the array is guaranteed to have a pointer land on it at some point. It also avoids unnecessary combinations by skipping those that won't lead to a larger area (i.e., those where the container would be narrower but not taller). This solution is based on a ‘proof by contradiction’. Since we are being greedy and only skipping combinations that won’t lead to a new maximum, we are guaranteed to find the solution.

========== Id ==========  
71

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#71-Max-water-container-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
