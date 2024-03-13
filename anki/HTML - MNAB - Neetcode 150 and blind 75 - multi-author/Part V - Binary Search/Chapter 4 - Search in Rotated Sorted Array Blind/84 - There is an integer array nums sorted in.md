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

To summarize, the below code will solve this problem using an augmented binary search solution. What is the time and space complexity?

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">def</span> <span class="hljs-title function_">search</span>(<span class="hljs-params">self, nums: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>], target: <span class="hljs-built_in">int</span></span>) -> <span class="hljs-built_in">int</span>:
     left, right = <span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(nums) - <span class="hljs-number">1</span>
     <span class="hljs-keyword">while</span> left &#x3C;= right:
         mid = (left + right) // <span class="hljs-number">2</span>
         <span class="hljs-keyword">if</span> nums[mid] >= nums[<span class="hljs-number">0</span>] <span class="hljs-keyword">and</span> target &#x3C; nums[<span class="hljs-number">0</span>]:
             <span class="hljs-comment"># We're in left sorted array</span>
             <span class="hljs-comment"># But target is in right sorted array</span>
             left = mid + <span class="hljs-number">1</span>
         <span class="hljs-keyword">elif</span> nums[mid] &#x3C; nums[<span class="hljs-number">0</span>] <span class="hljs-keyword">and</span> target >= nums[<span class="hljs-number">0</span>]:
             <span class="hljs-comment"># We're in right sorted array</span>
             <span class="hljs-comment"># But target is in left sorted array</span>
             right = mid - <span class="hljs-number">1</span>
         <span class="hljs-comment"># Otherwise: Normal binary search</span>
         <span class="hljs-keyword">elif</span> target > nums[mid]:
             left = mid + <span class="hljs-number">1</span>
         <span class="hljs-keyword">elif</span> target &#x3C; nums[mid]:
             right = mid - <span class="hljs-number">1</span>
         <span class="hljs-keyword">else</span>:
             <span class="hljs-keyword">return</span> mid
         <span class="hljs-keyword">return</span> -<span class="hljs-number">1</span>
</code></pre>
<!-- codeblock-end -->

Copy

A) Time complexity: O(n), Space complexity: O(1)

B) Time complexity: O(log n), Space complexity: O(1)

C) Time complexity: O(n log n), Space complexity: O(n)

D) Time complexity: O(n^2), Space complexity: O(n)  

==================== Answer ====================  

**Answer**: B

The binary search approach has a time complexity of O(log n) because in each step, you reduce the problem size by half. The space complexity is O(1) because you are not using any additional space that scales with the input size. You only need a constant amount of space to store the variables left, right, and mid.

==================== Id ====================  
84

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part V - Binary Search::Chapter 4 - Search in Rotated Sorted Array Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-V-Binary-Search::#Chapter-4-Search-in-Rotated-Sorted-Array-Blind::#84-There-is-an-integer-array-nums-sorted-in

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
