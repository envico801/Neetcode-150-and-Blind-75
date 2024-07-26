==================== Question ====================  

### Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0, 1, 2, 4, 5, 6, 7]` might become:

- `[4, 5, 6, 7, 0, 1, 2]` if it was rotated `4` times.

- `[0, 1, 2, 4, 5, 6, 7]` if it was rotated `7` times.

  Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return _the minimum element of this array_.

You must write an algorithm that runs in `O(log n)` time.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `n == nums.length`

- `1 <= n <= 5000`

- `-5000 <= nums[i] <= 5000`

- All the integers of `nums` are unique.

- `nums` is sorted and rotated between `1` and `n` times.

---

To summarize, the below code will solve this problem using an augmented binary search solution. What is the time and space complexity?

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">def</span> <span class="hljs-title function_">findMin</span>(<span class="hljs-params">self, nums: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]</span>) -> <span class="hljs-built_in">int</span>:
     res = nums[<span class="hljs-number">0</span>]
     l, r = <span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(nums) - <span class="hljs-number">1</span>
     <span class="hljs-keyword">while</span> l &#x3C;= r:
         <span class="hljs-keyword">if</span> nums[l] &#x3C; nums[r]:
             <span class="hljs-keyword">return</span> <span class="hljs-built_in">min</span>(res, nums[l])
         m = (l + r) // <span class="hljs-number">2</span>
         res = <span class="hljs-built_in">min</span>(res, nums[m])
         <span class="hljs-keyword">if</span> nums[m] >= nums[l]:
             <span class="hljs-comment"># We are in the left sorted portion, move right</span>
             l = m + <span class="hljs-number">1</span>
         <span class="hljs-keyword">else</span>:
             <span class="hljs-comment"># We are in the right sorted portion, move left</span>
             r = m - <span class="hljs-number">1</span>
     <span class="hljs-keyword">return</span> res
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(log n), Space complexity: O(1)

C) Time complexity: O(n log n), Space complexity: O(n)

D) Time complexity: O(n^2), Space complexity: O(n)  

==================== Answer ====================  

**Answer**: B

The binary search approach has a time complexity of O(log n) because in each step, you reduce the problem size by half. The space complexity is O(1) because you are not using any additional space that scales with the input size. You only need a constant amount of space to store the variables left, right, and mid.

==================== Id ====================  
113

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 5 - Find Minimum in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-5-Find-Minimum-in-Rotated-Sorted-Array-Blind::#113-Suppose-an-array-of-length-n-sorted-in-a

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
