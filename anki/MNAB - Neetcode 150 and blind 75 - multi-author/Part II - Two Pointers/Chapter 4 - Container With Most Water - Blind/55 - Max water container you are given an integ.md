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

Given the array height = \[1,8,6,2,5,4,8,3,7\], we start with the widest container, i.e., the first and the last line. Why is it impossible for us to find a new maximum area by leaving the left pointer at index = 0, and shifting the right pointer inwards?

A) Because the new container would be narrower but not taller.

B) Because the new container would be both narrower and taller.

C) Because the new container would be wider and not shorter.  

========== Answer ==========  

**Answer**: A

The amount of water a container can hold is determined by the height of the shorter line. If we move the pointer at the taller line, the new container will be narrower (since the distance between the lines decreases), and it can't be taller (since the height is still limited by the shorter line). Therefore, there’s no need to consider anymore containers where the left pointer is at index = 0, since they will always be smaller than the current maximum.

========== Id ==========  
55

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water - Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#55-Max-water-container-you-are-given-an-integ

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```

QUESTION STATUS: Safe to store
