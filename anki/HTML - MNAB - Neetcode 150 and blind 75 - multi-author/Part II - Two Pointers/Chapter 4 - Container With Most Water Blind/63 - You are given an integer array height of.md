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

When considering the parameters that affect the amount of water a container can hold, we know that the distance between the two lines is important. Given this, where should we initially place the two pointers in order to maximize the chance of finding the largest possible area?

A) In the middle of the array

B) At the shortest and tallest lines

C) At the two ends of the array

D) At random positions in the array  

==================== Answer ====================  

**Answer**: C

To maximize the initial area, we should start with the widest possible container, by placing the two pointers at the two ends of the array. This allows us to be greedy and maximize the distance between the two lines. From there, we can move the pointers inward to explore other possible containers.

==================== Id ====================  
63

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 4 - Container With Most Water Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-4-Container-With-Most-Water-Blind::#63-You-are-given-an-integer-array-height-of

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
