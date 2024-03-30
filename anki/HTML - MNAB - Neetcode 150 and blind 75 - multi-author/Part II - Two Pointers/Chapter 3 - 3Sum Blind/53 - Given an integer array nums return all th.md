==================== Question ====================  

### Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

<!-- codeblock-start -->
<pre><code>Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
</code></pre>
<!-- codeblock-end -->

**Example 2:**

<!-- codeblock-start -->
<pre><code>Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
</code></pre>
<!-- codeblock-end -->

**Example 3:**

<!-- codeblock-start -->
<pre><code>Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
</code></pre>
<!-- codeblock-end -->

**Constraints:**

- `3 <= nums.length <= 3000`

- `10^5 <= nums[i] <= 10^5`

---

Given the optimized solution using sorting and a two-pointer approach, what is the overall time and space complexity?

<!-- codeblock-start -->
<pre><code class="hljs language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Solution</span>:
     <span class="hljs-keyword">def</span> <span class="hljs-title function_">threeSum</span>(<span class="hljs-params">self, nums: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]</span>) -> <span class="hljs-type">List</span>[<span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>]]:
         res = []
         nums.sort()
         <span class="hljs-keyword">for</span> i, a <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(nums):
             <span class="hljs-keyword">if</span> i > <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> a == nums[i - <span class="hljs-number">1</span>]:
                 <span class="hljs-comment"># We already used nums[i] as the</span>
                 <span class="hljs-comment"># first element, so skip it</span>
                 <span class="hljs-keyword">continue</span>
             <span class="hljs-comment"># Use two pointers on the remaining</span>
             <span class="hljs-comment"># sorted subarray to solve a + b + c = 0</span>
             l, r = i + <span class="hljs-number">1</span>, <span class="hljs-built_in">len</span>(nums) - <span class="hljs-number">1</span>
             <span class="hljs-keyword">while</span> l &#x3C; r:
                 threeSum = a + nums[l] + nums[r]
                 <span class="hljs-keyword">if</span> threeSum > <span class="hljs-number">0</span>:
                     r -= <span class="hljs-number">1</span>
                 <span class="hljs-keyword">elif</span> threeSum &#x3C; <span class="hljs-number">0</span>:
                     l += <span class="hljs-number">1</span>
                 <span class="hljs-keyword">else</span>:
                     <span class="hljs-comment"># Solution found</span>
                     res.append([a, nums[l], nums[r]])
                     l += <span class="hljs-number">1</span>
                     <span class="hljs-keyword">while</span> nums[l] == nums[l - <span class="hljs-number">1</span>] <span class="hljs-keyword">and</span> l &#x3C; r:
                         <span class="hljs-comment"># Eliminate duplicates by incrementing</span>
                         <span class="hljs-comment"># left ptr until new nums[l] is found</span>
                         l += <span class="hljs-number">1</span>
         <span class="hljs-keyword">return</span> res
</code></pre>
<!-- codeblock-end -->

A) Time complexity: O(n^2), Space complexity: O(1)

B) Time complexity: O(n^2), Space complexity: O(n)

C) Time complexity: O(n log n), Space complexity: O(n)  

==================== Answer ====================  

**Answer**: A

The time complexity is O(n^2) because we iterate through the array once (which is O(n)), and for each iteration, we potentially go through the rest of the array using the two-pointer approach (which is also O(n)), thus resulting in O(n^2). The space complexity is O(1) since we aren't using additional space, other than the output.

==================== Id ====================  
53

---

DECK INFO

TARGET DECK: Data Structures and Algorithms::Leetcode::MNAB - Neetcode 150 and blind 75 - multi-author::Part II - Two Pointers::Chapter 3 - 3Sum Blind

FILE TAGS: #DSA::#Leetcode::#MNAB-Neetcode-150-and-blind-75-multi-author::#Part-II-Two-Pointers::#Chapter-3-3Sum-Blind::#53-Given-an-integer-array-nums-return-all-th

Tags:

Reference:

Related:

```dataview
LIST
where file.name = this.file.name
```
QUESTION STATUS: Safe to store
