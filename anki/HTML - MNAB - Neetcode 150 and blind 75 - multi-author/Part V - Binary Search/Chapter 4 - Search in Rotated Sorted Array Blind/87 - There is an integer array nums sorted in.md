==================== Question ====================  

### There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `1 <= nums.length <= 5000`

- `-10^4 <= nums[i] <= 10^4`

- `All values of nums are unique.`

- `nums is an ascending array that is possibly rotated.`

- `-10^4 <= target <= 10^4`

---

How can we determine if the target element belongs to the left or right portion of the array?

A) Compare the target with nums\[mid\].

B) Compare the target with nums\[0\] or nums\[length - 1\].

C) Compare the target with nums\[mid - 1\] and nums\[mid + 1\].

D) None of the above.  

==================== Answer ====================  

**Answer**: B

We can determine if the target element belongs to the left or right portion of the array by comparing the target with the first element (nums\[0\]) or the last element (nums\[length - 1\]). If the target is greater than or equal to the first element, it belongs to the left portion of the array. If the target is less than the first element, it belongs to the right portion of the array.

==================== Id ====================  
87

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 4 - Search in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-4-Search-in-Rotated-Sorted-Array-Blind::#87-There-is-an-integer-array-nums-sorted-in

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
