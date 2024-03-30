==================== Question ====================  

### You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/abc2d8fd-6012-4f88-7674-f6302aaf4200/public)

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: height = [1,1]
Output: 1
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `n == height.length`

- `2 <= n <= 10^5`

- `0 <= height[i] <= 10^4`

---

Given the array height = \[1,8,6,2,5,4,8,3,7\], we start with the widest container, i.e., the first and the last line. Why is it impossible for us to find a new maximum area by leaving the left pointer at index = 0, and shifting the right pointer inwards?

A) Because the new container would be narrower but not taller.

B) Because the new container would be both narrower and taller.

C) Because the new container would be wider and not shorter.  

==================== Answer ====================  

**Answer**: A

The amount of water a container can hold is determined by the height of the shorter line. If we move the pointer at the taller line, the new container will be narrower (since the distance between the lines decreases), and it can't be taller (since the height is still limited by the shorter line). Therefore, there’s no need to consider anymore containers where the left pointer is at index = 0, since they will always be smaller than the current maximum.

==================== Id ====================  
50

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#50-You-are-given-an-integer-array-height-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
